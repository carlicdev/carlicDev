
import PostDetail from '@/app/components/PostDetail';


import { getPostDetails } from '@/app/services/graphql';


const PostPage = async ({params}) => {
    const { slug } = await params;
    const post = await getPostDetails(slug)

  return (
    <div className='max-w-7xl mx-auto w-full pt-[110px] '>
        <div className=' w-full grid grid-cols-10 gap-4'>

            <div className='col-span-10 lg:col-span-7 flex flex-col'>
                {post && <PostDetail post={post}/> }
            </div>
        </div>
    </div>
  )
}

export default PostPage