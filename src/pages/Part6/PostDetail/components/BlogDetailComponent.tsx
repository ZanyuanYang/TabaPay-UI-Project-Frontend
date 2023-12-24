import ReactMarkdown from 'react-markdown';
import BlogHeader from './BlogHeader';
import BlogDetailList from './BlogDetailList';

type BlogDetailProps = {
  post: API.Post | undefined;
};
function BlogDetailComponent({ post }: BlogDetailProps) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="max-w-2xl space-y-8 lg:mx-0 lg:max-w-none">
        <h1 className="text-4xl font-semibold tracking-tight text-skin-black sm:text-6xl">
          {post?.title}
        </h1>
        <BlogHeader blogDetail={post} />
        <img
          className="lg:w-full h-[30em] object-cover mt-4 rounded-xl"
          src={post?.imageUrl}
          alt="unsplash"
        />
        <div className="px-2 space-y-12 lg:px-28">
          {post?.introduction && (
            <ReactMarkdown className="text-lg __react_markdown">
              {post?.introduction}
            </ReactMarkdown>
          )}

          <BlogDetailList postList={post?.lists} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailComponent;
