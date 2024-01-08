import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

interface TreeNodeProps {
  node: any;
  onOpenNode: string;
  setOnOpenNode: (node: string) => void;
  activeTab: string;
  onClickTab: (tab: string) => void;
}
function TreeNode(props: TreeNodeProps) {
  const { node, onOpenNode, setOnOpenNode, activeTab, onClickTab } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <li>
      {node.children ? (
        <div
          className={`cursor-pointer flex justify-between hover:bg-gray-200 rounded-md p-2 mt-1`}
          onClick={() => {
            setIsOpen(!isOpen);
            setOnOpenNode(node.title);
          }}
        >
          <p>{node.title}</p>
          {isOpen ? (
            <KeyboardArrowDownRoundedIcon />
          ) : (
            <ChevronRightRoundedIcon />
          )}
        </div>
      ) : (
        // <div className="flex gap-2" onClick={() => onClickNode(node.title)}>
        //   <input id={node.title} type="radio" value={node.title} name="node" />
        //   <label htmlFor={node.title}>{node.title}</label>
        // </div>
        <li
          className="list-disc ml-6"
          onClick={() => {
            setOnOpenNode(node.title);
            onClickTab(node.title);
          }}
        >
          <div
            className={`cursor-pointer hover:bg-gray-200 rounded-md p-2 -ml-6 pl-6 ${
              activeTab === node.title ? 'bg-gray-200' : ''
            }`}
          >
            {node.title}
          </div>
        </li>
      )}
      {isOpen && node.children && (
        <TreeMenu
          nodes={node.children}
          onOpenNode={onOpenNode}
          setOnOpenNode={setOnOpenNode}
          activeTab={activeTab}
          onClickTab={onClickTab}
        />
      )}
    </li>
  );
}

interface TreeMenuProps {
  nodes: any;
  onOpenNode: string;
  setOnOpenNode: (node: string) => void;
  activeTab: string;
  onClickTab: (tab: string) => void;
}
function TreeMenu(props: TreeMenuProps) {
  const { nodes, onOpenNode, setOnOpenNode, activeTab, onClickTab } = props;
  return (
    <ul className="mt-1">
      {nodes.map((node: any, index: number) => {
        return (
          <TreeNode
            key={index}
            node={node}
            onOpenNode={onOpenNode}
            setOnOpenNode={setOnOpenNode}
            activeTab={activeTab}
            onClickTab={onClickTab}
          />
        );
      })}
    </ul>
  );
}

export default TreeMenu;
