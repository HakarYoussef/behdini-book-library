import groq from 'groq';
import { getClient } from '../../lib/sanity.server';
import { Card } from '../../components';

const Author = ({ authors }) => {
  console.log(authors);
  return (
    <>
      <div className="relative grid w-full h-screen text-2xl md:grid-cols-10">
        <div className="w-full h-0 col-span-10 text-right bg-cyan-700">
          {authors?.map((author) => {
            return (
              <div
                key={author.id}
                className="flex flex-row-reverse items-center h-12 mt-20 mr-5 text-4xl text-white border-r-8 border-pink-600 lg:mr-20 font-uni"
              >
                <h3 className="mr-4">{author.authorName}</h3>
              </div>
            );
          })}
        </div>

        <div className="z-10 grid col-span-10 gap-5 mx-5 mt-40 mb-5 sm:mt-0 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {authors?.map((author) => (
            <div key={author._id}>
              <Card post={author} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const query = groq`*[_type == "post" && author->slug.current == $slug]{

    _id,
    title,
    "authorName": author-> name,
    "authorBio": author-> bio,
    "authorSlug": author-> slug,
    mainImage,
    downloads,
    slug,
 
}
`;

export async function getStaticPaths() {
  const path = await getClient().fetch(
    groq`*[_type == "post" && author._ref in *[_type=="author" && slug == slug.current ]]`
  );

  return {
    paths: path.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const authors = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: {
      authors,
    },
  };
}

export default Author;
