import React from 'react'
import Title from '../components/Title';
import PostCard from '../components/PostCard';
import { getPosts } from '../services/graphql';

const BlogPage = async () => {
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
                posts && posts.map((post, index) => (
                    <PostCard post={post} key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default BlogPage