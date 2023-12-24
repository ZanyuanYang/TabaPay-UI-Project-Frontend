import { useContext, useEffect } from 'react';
import { MenuContext } from '@/contexts/menu_context';
import PostCreateDialog from '@/pages/Part6/components/PostCreateDialog';

interface BodyProps {
  activeTab: string;
}

function Body(props: BodyProps) {
  const { activeTab } = props;
  const { getPostsByCategory } = useContext(MenuContext);

  useEffect(() => {
    getPostsByCategory(activeTab);
  }, []);

  return (
    <section className="flex justify-between">
      <h1 className="text-4xl font-bold">{activeTab}</h1>
      <PostCreateDialog category={activeTab} />
    </section>
  );
}
export default Body;
