import TreeMenu from './components/TreeMenu';
import Body from './components/Body';
import CategoryLists from './components/CategoryLists';
import { Footer, Header } from '@/layouts';
import React, { useContext } from 'react';
import { MenuContext } from '@/contexts/menu_context';

function Part6() {
  const { activeTab, onClickTab } = useContext(MenuContext);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex flex-1 mt-16">
        <div className="w-64 p-4 h-[93vh] border-r-2">
          <TreeMenu activeTab={activeTab} onClickTab={onClickTab} />
        </div>
        <div className="px-8 py-6 flex flex-col flex-1 mx-auto overflow-y-auto h-[93vh]">
          {activeTab && (
            <>
              <Body />
              <CategoryLists />
            </>
          )}
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default Part6;
