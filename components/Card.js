import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { urlFor } from '../lib/sanity';

const Card = ({ post }) => {
  const [likes, setLikes] = useState(post?.likes);
  const [unLikes, setUnLikes] = useState(post?.likes);

  const addLike = async () => {
    const res = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({ _id: post._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  // const removeLike = async () => {
  //   const res = await fetch('/api/handle-unlike', {
  //     method: 'POST',
  //     body: JSON.stringify({ _id: post._id }),
  //   }).catch((error) => console.log(error));

  //   const data = await res.json();

  //   setUnLikes(data.unLikes);
  // };

  return !post ? (
    <div class="p-1 h-96  text-right shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-cyan-300 transition ease-in-out duration-150 hover:shadow-cyan-500 rounded-2xl">
      <div class="block p-3 h-full  bg-gray-800 sm:p-3 rounded-xl" href="">
        <div className="relative w-full h-48 rounded-xl">
          <div className="bg-gray-700 animate-pulse h-52"></div>
        </div>

        <div class="mt-6  sm:pl-8 flex flex-col  items-end ">
          <div class="text-2xl my-2 font-uni font-medium text-white">
            <div className="h-5 bg-gray-700 animate-pulse w-52"></div>
          </div>

          <div class="text-2xl my-2 font-uni font-medium text-white">
            <div className="h-5 bg-gray-700 animate-pulse w-44"></div>
          </div>
          <div className="flex flex-row-reverse items-center mt-5 text-3xl cursor-pointer">
            {/* <div className="flex items-center">
              <AiFillLike onClick={addLike} className="text-gray-600" />
              <p className="ml-2 text-base text-gray-500">{likes}</p>
            </div> */}

            {/* <div className="flex items-center mr-5">
              <AiFillDislike onClick={removeLike} className="text-gray-600" />
              <p className="ml-2 text-base text-gray-500">{unLikes}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div class="p-1  h-96 text-right shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-cyan-300 transition ease-in-out duration-150 hover:shadow-cyan-500 rounded-2xl">
      <div class="block p-3 h-full   bg-gray-800 sm:p-3 rounded-xl" href="">
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
        <div class="mt-5  h-32  flex flex-col items-end sm:pl-8  ">
          <h5 class="text-2xl flex-1 text-right leading-relaxed font-uni font-medium text-white">
            {post.title.length > 28 ? (
              <> {post.title.slice(0, 28)} ...</>
            ) : (
              post.title
            )}
          </h5>
          <p class="mt-2 w-full  text-base font-speda text-gray-300">
            {post.authorName ? (
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
          <div className="flex flex-row-reverse items-center mt-5 text-3xl cursor-pointer">
            {/* <div className="flex items-center">
              <AiFillLike onClick={addLike} className="text-gray-600" />
              <p className="ml-2 text-base text-gray-500">{likes}</p>
            </div> */}

            {/* <div className="flex items-center mr-5">
              <AiFillDislike onClick={removeLike} className="text-gray-600" />
              <p className="ml-2 text-base text-gray-500">{unLikes}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
