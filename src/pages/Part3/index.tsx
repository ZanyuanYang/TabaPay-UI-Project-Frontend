import TreeMenu from './components/TreeMenu';
import { useState } from 'react';
import Body from './components/Body';
import { useSearchParams } from 'react-router-dom';
import treeData from '@/datas/treeData';

function Part3() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string>('');
  const [onOpenNode, setOnOpenNode] = useState<string>('');
  const [activeTabParams, setActiveTabParams] = useSearchParams({ tab: '' });
  const activeTab = activeTabParams.get('tab') || '';

  const onClickNode = (node: string) => {
    setSelectedNode(node);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

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
    <main>
      <section className="w-64 h-screen p-4 border-r-2">
        <TreeMenu
          nodes={treeData}
          onClickNode={onClickNode}
          onOpenNode={onOpenNode}
          setOnOpenNode={setOnOpenNode}
          activeTab={activeTab}
          onClickTab={onClickTab}
        />
      </section>

      <Body selectedNode={selectedNode} />
      {/*<ModalDialog*/}
      {/*  open={showModal}*/}
      {/*  onClose={onCloseModal}*/}
      {/*  content={selectedNode}*/}
      {/*/>*/}
    </main>
  );
}

export default Part3;
