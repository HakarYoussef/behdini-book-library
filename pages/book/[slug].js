import groq from 'groq';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import Link from 'next/link';

const Book = ({ posts }) => {
  const [likes, setLikes] = useState(posts?.likes);

  const addLike = async () => {
    const res = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({ _id: posts._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  return (
    <>
      {posts && (
        <div className="bg-gray-900 lg:h-auto">
          <div className="w-full p-10 md:flex lg:justify-between lg:p-20">
            <div className="relative border-2 border-gray-600 rounded-xl md:w-96 h-96">
              <Image
                unoptimized
                src={urlFor(posts.mainImage).width(500).height(300).url()}
                alt={posts.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col items-end md:w-3/4 md:ml-3 lg:ml-20">
              <div className="mb-10">
                <h3 className="mt-20 text-5xl leading-relaxed text-right text-white font-uni md:m-0">
                  {posts.title ? posts.title : '---'}
                </h3>
              </div>
              <div className="flex flex-row-reverse text-right text-white">
                <span className="font-speda">:نڤیسەرێ پەرتووکێ</span>
                <span className="mb-5 mr-3 font-semibold text-pink-600 underline font-speda">
                  <Link href={`/author/${posts.authorSlug.current}`}>
                    {posts.authorName ? posts.authorName : '---'}
                  </Link>
                </span>
              </div>
              <div className="flex flex-row-reverse text-right text-white">
                <span className="font-speda">:وەرگێر </span>
                <span className="mb-5 mr-3 font-semibold font-speda">
                  {posts.translatorName ? posts.translatorName : '---'}
                </span>
              </div>
              <div className="flex flex-row-reverse text-right text-white">
                <span className="font-speda">:ئامادەکرن </span>
                <span className="mb-5 mr-3 font-semibold font-speda">
                  {posts.prepare ? posts.prepare : '---'}
                </span>
              </div>
              {posts.categories.map((category) => (
                <div
                  key={category.id}
                  className="flex flex-row-reverse text-right text-white"
                >
                  <span className="font-speda">:بابەت </span>
                  <span className="mb-5 mr-3 font-semibold font-speda">
                    {category.title ? category.title : '---'}
                  </span>
                </div>
              ))}
              <div className="flex flex-row-reverse text-right text-white">
                <span className="font-speda">:ژمارا لاپەڕا </span>
                <span className="mb-5 mr-3 font-semibold font-speda">
                  {posts.pageNumber}
                </span>
              </div>
              <div className="w-full mt-10 md:w-fit">
                <a
                  href={`${posts.downloadLink}`}
                  target="_blank"
                  rel="noreferrer"
                  class="inline-block w-full lg:w-96 md:w-64  px-8   text-center py-3 text-lg font-bold font-speda text-cyan-500 border rounded transition border-current hover:scale-105 hover:shadow-xl active:text-cyan-400 focus:outline-none focus:ring"
                >
                  داونلۆد
                </a>
              </div>
              {/* <button
                onClick={addLike}
                className="px-20 py-3 m-5 text-xl text-white bg-blue-600 cursor-pointer"
              >
                like: {likes}
              </button> */}

              <div className="flex flex-col items-end m-10 text-right lg:m-20">
                <span className="text-gray-400 font-speda">
                  :کورتیەک لسەر پەرتووکێ{' '}
                </span>
                <span className="relative w-full h-full p-5 mt-3 text-sm text-right text-gray-200 bg-gray-800 font-speda rounded-xl ">
                  <PortableText value={posts.body} />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const query = groq`*[_type ==  'post' && slug.current == $slug][0]{

_id,
title,
"authorName": author-> name,
"authorBio": author-> bio,
"authorSlug": author-> slug,
"translatorName": translator-> name,
"translatorBio": translator-> bio,
"categories": categories[]->{id, title},
body,
mainImage,
slug,
downloadLink,
likes,
prepare,
pageNumber
}
`;

export async function getStaticPaths() {
  const path = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: path.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const posts = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: {
      posts,
    },
  };
}

export default Book;