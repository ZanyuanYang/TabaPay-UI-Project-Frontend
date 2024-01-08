import TreeMenu from './components/TreeMenu';
import { useState } from 'react';
import Body from './components/Body';
import { useSearchParams } from 'react-router-dom';
import CategoryLists from './components/CategoryLists';
import treeData from '@/datas/treeData';
import { Footer, Header } from '@/layouts';

function Part5() {
  const [onOpenNode, setOnOpenNode] = useState<string>('');
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
          <TreeMenu
            nodes={treeData}
            onOpenNode={onOpenNode}
            setOnOpenNode={setOnOpenNode}
            activeTab={activeTab}
            onClickTab={onClickTab}
          />
        </div>
        <div className="p-8">
          <Body activeTab={activeTab} />
          <CategoryLists />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Part5;
