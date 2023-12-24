import { useParams, useSearchParams } from 'react-router-dom';
import { Footer, Header } from '@/layouts';
import { getPostByIdUsingGet } from '@/services/PostController';
import { useEffect, useState } from 'react';
import BlogDetailComponent from '@/pages/Part6/PostDetail/components/BlogDetailComponent';
import TreeMenu from '@/pages/Part6/components/TreeMenu';

function PostDetail() {
  const { postId, category } = useParams();
  const [activeTabParams, setActiveTabParams] = useSearchParams({ tab: '' });
  const [post, setPost] = useState<API.Post>();
  const activeTab = activeTabParams.get('tab') || '';
  const onClickTab = (tab: string) => {
    setActiveTabParams(
      (prev: any) => {
        prev.set('tab', tab);
        return prev;
      },
      { replace: true }
    );
  };
  const getPostById = async () => {
    const res = await getPostByIdUsingGet(category || '', postId || '');
    setPost(res.data);
  };
  useEffect(() => {
    getPostById();
  }, []);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex flex-1 mt-16">
        <div className="w-64 p-4 border-r-2">
          <TreeMenu activeTab={activeTab} onClickTab={onClickTab} />
        </div>
        <div className="p-8 flex-1">
          <BlogDetailComponent post={post} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default PostDetail;
