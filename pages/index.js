import Head from 'next/head';
import { RiSearchLine } from 'react-icons/ri';
import { HiChevronLeft, HiPlus } from 'react-icons/hi';
import { Card, SideMenu } from '../components';
import { getClient } from '../lib/sanity.server';
import groq from 'groq';
import { useState, useEffect } from 'react';

export default function Home({ posts }) {
  const [open, setOpen] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState(40);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchString, setSearchString] = useState('');
  const [postTitles, setPostTitles] = useState(
    posts.map((post) => post.title.toLowerCase())
  );

  const [width, setWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth
  );
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    const filteredBooks = [...postTitles].filter(
      (title) => title.indexOf(searchString.trim().toLowerCase()) !== -1
    );

    const refilteredPost = [...posts].filter((post) =>
      filteredBooks.includes(post.title.toLowerCase())
    );

    setFilteredPosts(refilteredPost);
  }, [searchString, posts]);

  function loadMore() {
    setIndex((prev) => prev + 40);
  }

  return (
    <div>
      <Head>
        <title>Behdini Book Library</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative z-50 pb-20 pl-5 pr-5 bg-gray-900 lg:px-20 lg:grid sm:mx-5 sm:grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-row-reverse items-center p-3 mt-16 mb-5 bg-gray-800 rounded-lg lg:col-span-4">
          <RiSearchLine className="text-gray-400" />
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            type="text"
            placeholder="لێگەریان"
            className="w-full mr-3 text-right text-white bg-transparent outline-none "
          />
        </div>
        <div className="col-span-11 ">
          <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {filteredPosts?.slice(0, index).map((post) => (
              <div key={post._id}>
                <Card post={post} />
              </div>
            ))}
          </div>
        </div>
        {width > 767 ? (
          <div className="flex">
            <div
              className={`${
                open ? 'w-3/12' : 'w-24'
              } fixed  top-0 right-0  duration-300 border-l-2 border-gray-800  h-full bg-gray-900`}
            >
              <HiChevronLeft
                onClick={() => setOpen(!open)}
                className={`${
                  open && 'rotate-180'
                } absolute duration-300 transition ease-in-out text-4xl text-white bg-gray-800 border-2 border-gray-800 rounded-full cursor-pointer -left-5 top-9`}
              />
              <SideMenu width={width} open={open} categories={posts} />
            </div>
          </div>
        ) : (
          <div className="flex">
            <div
              className={`${
                open
                  ? 'w-80  shadow-2xl border-l-2 border-gray-800 bg-gray-900'
                  : 'w-3.5'
              } fixed top-0 right-0  duration-300   h-full `}
            >
              <HiChevronLeft
                onClick={() => setOpen(!open)}
                className={`${
                  open && 'rotate-180'
                } absolute duration-300 transition ease-in-out text-4xl text-white bg-gray-800 border-2 border-gray-800 rounded-full cursor-pointer -left-5 top-9`}
              />
              <SideMenu open={open} categories={posts} />
            </div>
          </div>
        )}

        {isCompleted ? (
          ''
        ) : (
          <button
            onClick={loadMore}
            type="button"
            className="flex items-center mt-16 group"
          >
            <HiPlus className="mr-2 text-lg text-gray-400 duration-150 group-hover:text-cyan-500" />
            <span className="text-gray-400 duration-150 group-hover:text-cyan-500">
              زێدەتر ببینە
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
  *[_type == 'post'] | order(publishedAt desc){
    _id,
    title,
    "authorName": author-> name,
    "authorSlug": author-> slug,
    "categories": categories[]->{id, title,slug},
    mainImage,
    slug,
    downloads,
    prepare,
    downloadLink,
  }
  `);

  return {
    props: {
      posts,
    },
  };
}
