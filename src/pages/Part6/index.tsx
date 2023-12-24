import TreeMenu from './components/TreeMenu';
import Body from './components/Body';
import CategoryLists from './components/CategoryLists';
import { Footer, Header } from '@/layouts';
import { useSearchParams } from 'react-router-dom';
import React from 'react';

function Part6() {
  const [activeTabParams, setActiveTabParams] = useSearchParams({ tab: '' });
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

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex flex-1 mt-16">
        <div className="w-64 p-4 border-r-2">
          <TreeMenu activeTab={activeTab} onClickTab={onClickTab} />
        </div>
        <div className="p-8 flex-1 mx-auto max-w-7xl">
          {activeTab && (
            <>
              <Body activeTab={activeTab} />
              <CategoryLists activeTab={activeTab} />
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Part6;
