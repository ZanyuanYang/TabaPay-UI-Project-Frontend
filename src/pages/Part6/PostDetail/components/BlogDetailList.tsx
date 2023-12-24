import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';

type BlogDetailListProps = {
  postList: API.PostItem[] | undefined;
};
function BlogDetailList({ postList }: BlogDetailListProps) {
  return (
    <ol className="pl-2 mt-2 space-y-16">
      {postList?.map((post: API.PostItem, key: number) => {
        return (
          <div key={post._id}>
            <div className="flex items-center gap-4">
              <a
                href={post.referralLink}
                target="_blank"
                className="text-3xl font-semibold text-amber-500"
                rel="noreferrer"
              >
                {key + 1} . {post.name}
              </a>
            </div>
            <img className="w-72 py-2" src={post.imageUrl} alt="amazon" />

            {post.description && (
              <ReactMarkdown className="mt-2 __react_markdown">
                {post.description}
              </ReactMarkdown>
            )}
            <a href={post.referralLink} target="_blank" rel="noreferrer">
              <Button type="button">BUY NOW</Button>
            </a>
          </div>
        );
      })}
    </ol>
  );
}

export default BlogDetailList;
