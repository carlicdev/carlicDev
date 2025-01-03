import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='w-full lg:w-1/3 p-1 '>
        <div className='flex flex-col gap-3 bg-black p-5'>
        <   div className="w-full h-[250px] rounded-t-lg">
                <img src={post.node.featuredImage.url} alt='postImg' className="w-full h-[250px] rounded-t-lg" />
            </div>
            <p className='font-black text-xl lg:text-2xl tracking-tighter'>{post.node.title}</p>
            <p className='lg:text-lg'>{post.node.excerpt.slice(0,150)}...</p>
            <div className='flex'>
                <Link href={`/post/${post.node.slug}`}>
                    <button className='bg-orange-700 px-4 py-2 rounded font-medium'>
                        Leer Artículo
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PostCard