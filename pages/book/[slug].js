import groq from 'groq';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import { PortableText } from '@portabletext/react';
import { useState } from 'react';
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';

const Book = ({ posts }) => {
  const [downloads, setDownloads] = useState(posts?.downloads);
  console.log(posts?.downloads);

  const handleDownloads = async () => {
    const res = await fetch('/api/handle-downloads', {
      method: 'POST',
      body: JSON.stringify({ _id: posts._id }),
    }).catch((error) => console.log(error));
    const data = await res.json();
    setDownloads(data.downloads);
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
                  {posts.authorName === '-' ? (
                    posts.authorName
                  ) : (
                    <Link href={`/author/${posts.authorSlug.current}`}>
                      {posts.authorName ? (
                        <Link href={`/author/${posts?.authorSlug?.current}`}>
                          {posts.authorName}
                        </Link>
                      ) : (
                        '---'
                      )}
                    </Link>
                  )}
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
                <div className=""></div>

                <a
                  onClick={handleDownloads}
                  href={`${posts.downloadLink}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full px-8 py-3 text-lg font-bold text-center transition border rounded lg:w-96 md:w-64 font-speda text-cyan-500 hover:scale-105 hover:shadow-xl active:text-cyan-400 focus:outline-none focus:ring"
                >
                  <HiDownload className="text-xl text-gray-500" />
                  <h3> داونلۆد</h3>{' '}
                </a>
              </div>

              <div className="flex flex-row-reverse items-center mt-5 text-3xl cursor-pointer">
                <div className="flex flex-row-reverse items-center ">
                  <span className="text-base text-white font-speda">
                    :ژمارا داگرتنا{' '}
                  </span>
                  {downloads === 'null' ? (
                    <p className="mr-2 text-base font-bold text-white">0</p>
                  ) : (
                    <p className="mr-2 text-base font-bold text-white">
                      {downloads}
                    </p>
                  )}
                </div>
              </div>

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
pageNumber,
downloads
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
