import React from 'react'
import Title from './Title'
import { getPosts } from '../services/graphql'
import PostCard from './PostCard';
import Link from 'next/link';

const BlogSection = async () => {
    const posts = await getPosts();

  return (
    <div className='max-w-7xl mx-auto my-20'>
        <Title 
        category={'el blog'}
        title={'construye tu fortaleza'}
        subtext={'Explora temas como masculinidad, transformación personal y diseño de estilo de vida.'}
        />

        <div className='flex flex-wrap mt-10'>
            {
                posts && posts.slice(0,6).map((post, index) => (
                    <PostCard post={post} key={index} />
                ))
            }
        </div>
            <div className='text-center my-10'>
                <Link href={`/blog`}>
                    <button className='bg-orange-700 px-4 py-2 rounded font-medium'>
                        Más Artículos Del Blog
                    </button>
                </Link>
            </div>
    </div>
  )
}

export default BlogSection