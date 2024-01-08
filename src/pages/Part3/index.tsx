import TreeMenu from './components/TreeMenu';
import { useState } from 'react';
import Body from './components/Body';
import { useSearchParams } from 'react-router-dom';
import treeData from '@/datas/treeData';

function Part3() {
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
    <main className="flex">
      <section className="w-64 h-screen p-4 border-r-2">
        <TreeMenu
          nodes={treeData}
          onOpenNode={onOpenNode}
          setOnOpenNode={setOnOpenNode}
          activeTab={activeTab}
          onClickTab={onClickTab}
        />
      </section>

      <Body activeTab={activeTab} />
      {/*<ModalDialog*/}
      {/*  open={showModal}*/}
      {/*  onClose={onCloseModal}*/}
      {/*  content={selectedNode}*/}
      {/*/>*/}
    </main>
  );
}

export default Part3;
