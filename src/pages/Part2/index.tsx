import TreeMenu from './components/TreeMenu';
import { useState } from 'react';
import ModalDialog from './components/ModalDialog';
import treeData from '@/datas/treeData';

function Part2() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<string>('');

  const onClickNode = (node: string) => {
    setSelectedNode(node);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold">Part 2</h1>
      <h2 className="">
        If Click on a Tree Item from Part 1, show which one was clicked? Using a
        Modal Dialog Box...
      </h2>
      <TreeMenu nodes={treeData} onClickNode={onClickNode} />
      <ModalDialog
        open={showModal}
        onClose={onCloseModal}
        content={selectedNode}
      />
    </main>
  );
}

export default Part2;
