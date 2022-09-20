import groq from 'groq';
import { getClient } from '../../lib/sanity.server';
import { Card } from '../../components';

const Category = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <div className="relative grid w-full h-screen text-2xl md:grid-cols-10">
        <div className="w-full h-0 col-span-10 text-right bg-cyan-700">
          {categories?.slice(0, 1).map((category) => {
            return category.categories.map((c) => {
              return (
                <div
                  key={c.id}
                  className="flex flex-row-reverse items-center h-12 mt-20 mr-20 text-4xl text-white border-r-8 border-pink-600 font-uni"
                >
                  <h3 className="mr-4">{c.title}</h3>
                </div>
              );
            });
          })}
        </div>

        <div className="z-10 grid col-span-10 gap-5 mx-5 mt-5 mb-5 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {categories?.map((category) => (
            <div key={category._id}>
              <Card post={category} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const query = groq`*[_type == 'post' && $slug in categories[]->slug.current]{


    _id,
    title,
    "authorName": author-> name,
    "authorBio": author-> bio,
    "translatorName": translator-> name,
    "translatorBio": translator-> bio,
    "categories": categories[]->{id, title, slug},
    body,
    mainImage,
    slug,
    downloadLink,
    likes,
}
`;

export async function getStaticPaths() {
  const path = await getClient().fetch(
    groq`*[_type == "post" && categories == categories._ref]`
  );

  return {
    paths: path.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const categories = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: {
      categories,
    },
  };
}

export default Category;
