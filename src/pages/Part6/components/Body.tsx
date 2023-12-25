import { useContext, useEffect } from 'react';
import { MenuContext } from '@/contexts/menu_context';
import PostCreateDialog from '@/pages/Part6/components/PostCreateDialog';

function Body() {
  const { activeTab } = useContext(MenuContext);

  return (
    <section className="flex justify-between">
      <h1 className="text-4xl font-bold">{activeTab}</h1>
      <PostCreateDialog category={activeTab} />
    </section>
  );
}
export default Body;
