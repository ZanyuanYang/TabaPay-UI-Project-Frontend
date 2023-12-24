import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

interface TreeNodeProps {
  node: any;
}
function TreeNode(props: TreeNodeProps) {
  const { node } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li>
      {node.children ? (
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <KeyboardArrowDownRoundedIcon />
          ) : (
            <ChevronRightRoundedIcon />
          )}
          {node.title}
        </div>
      ) : (
        <div className="flex gap-2">
          <input id={node.title} type="radio" value={node.title} name="node" />
          <label htmlFor={node.title}>{node.title}</label>
        </div>
      )}
      {isOpen && node.children && <TreeMenu nodes={node.children} />}
    </li>
  );
}

interface TreeMenuProps {
  nodes: any;
}
function TreeMenu(props: TreeMenuProps) {
  const { nodes } = props;
  return (
    <ul className="mt-1 pl-2 w-64">
      {nodes.map((node: any, index: number) => {
        return <TreeNode key={index} node={node} />;
      })}
    </ul>
  );
}

export default TreeMenu;
