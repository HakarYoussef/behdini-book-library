import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { urlFor } from '../lib/sanity';
import { HiDownload } from 'react-icons/hi';

const Card = ({ post }) => {
  const [downloads, setDownloads] = useState(`${post?.downloads}`);

  const handleDownloads = async () => {
    const res = await fetch('/api/handle-downloads', {
      method: 'POST',
      body: JSON.stringify({ _id: post._id }),
    }).catch((error) => console.log(error));
    const data = await res.json();
    setDownloads(data.downloads);
  };

  return !post ? (
    <div className="p-1 text-right transition duration-150 ease-in-out shadow-xl h-96 bg-gradient-to-r from-pink-500 via-red-500 to-cyan-300 hover:shadow-cyan-500 rounded-2xl">
      <div className="block h-full p-3 bg-gray-800 sm:p-3 rounded-xl" href="">
        <div className="relative w-full h-48 rounded-xl">
          <div className="bg-gray-700 animate-pulse h-52"></div>
        </div>

        <div className="flex flex-col items-end mt-6 sm:pl-8 ">
          <div className="my-2 text-2xl font-medium text-white font-uni">
            <div className="h-5 bg-gray-700 animate-pulse w-52"></div>
          </div>

          <div class="text-2xl my-2 font-uni font-medium text-white">
            <div className="h-5 bg-gray-700 animate-pulse w-44"></div>
          </div>
          <a href={post.downloadLink} target="_blank" rel="noreferrer">
            <div className="flex flex-row-reverse items-end mt-3 cursor-pointer ">
              <HiDownload
                onClick={handleDownloads}
                className="text-xl text-gray-500"
              />
              {downloads === 'null' ? (
                <p className="mr-1 text-base text-gray-500">0</p>
              ) : (
                <p className="mr-1 text-base text-gray-500">{downloads}</p>
              )}
            </div>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-1 text-right transition duration-150 ease-in-out shadow-xl h-96 bg-gradient-to-r from-pink-500 via-red-500 to-cyan-300 hover:shadow-cyan-500 rounded-2xl">
      <div className="block h-full p-3 bg-gray-800 sm:p-3 rounded-xl" href="">
        <div className="relative w-full h-48 rounded-xl">
          <Link href={`/book/${post.slug.current}`}>
            <Image
              loading="lazy"
              unoptimized
              src={urlFor(post.mainImage).width(500).height(300).url()}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer rounded-xl"
            />
          </Link>
        </div>

        <div className="flex flex-col items-end justify-end flex-1 h-32 mt-5 sm:pl-8 ">
          <h5 className="flex-1 text-2xl font-medium leading-relaxed text-right text-white font-uni">
            {post.title.length > 28 ? (
              <> {post.title.slice(0, 28)} ...</>
            ) : (
              post.title
            )}
          </h5>
          <p className="w-full mt-2 text-base text-gray-300 font-speda">
            {post.authorName !== '-' ? (
              <span className=" text-cyan-500">
                <Link href={`/author/${post?.authorSlug?.current}`}>
                  {post.authorName}
                </Link>
                <span className="ml-1">@</span>
              </span>
            ) : (
              post.prepare
            )}
          </p>

          <a href={post.downloadLink} target="_blank" rel="noreferrer">
            <div className="flex flex-row-reverse items-end mt-3 cursor-pointer ">
              <HiDownload
                onClick={handleDownloads}
                className="text-xl text-gray-500"
              />
              {downloads === 'null' ? (
                <p className="mr-1 text-base text-gray-500">0</p>
              ) : (
                <p className="mr-1 text-base text-gray-500">{downloads}</p>
              )}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
