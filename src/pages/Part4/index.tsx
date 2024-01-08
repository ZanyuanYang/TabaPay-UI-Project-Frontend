import TreeMenu from './components/TreeMenu';
import { useState } from 'react';
import Body from './components/Body';
import { useSearchParams } from 'react-router-dom';
import treeData from '@/datas/treeData';
import { Footer, Header } from '@/layouts';

function Part4() {
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
    <main className="flex flex-col h-screen">
      <Header />
      <section className="flex mt-16 h-full">
        <div className="w-64 p-4 border-r-2">
          <TreeMenu
            nodes={treeData}
            onOpenNode={onOpenNode}
            setOnOpenNode={setOnOpenNode}
            activeTab={activeTab}
            onClickTab={onClickTab}
          />
        </div>
        <Body activeTab={activeTab} />
      </section>
      <Footer />
    </main>
  );
}

export default Part4;
