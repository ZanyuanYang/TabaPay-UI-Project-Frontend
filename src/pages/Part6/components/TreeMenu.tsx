import { useContext, useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { MenuContext } from '@/contexts/menu_context';
import { Button } from '@/components/ui/button';
import MenuCreateDialog from '@/pages/Part6/components/MenuCreateDialog';
import CategoryCreateDialog from '@/pages/Part6/components/CategoryCreateDialog';
import { Link } from 'react-router-dom';

interface TreeNodeProps {
  node: any;
  onClickTab: (tab: string) => void;
  activeTab: string;
}
function TreeNode(props: TreeNodeProps) {
  const { node, onClickTab, activeTab } = props;
  const { onOpenNode, setOnOpenNode, getPostsByCategory } =
    useContext(MenuContext);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleNodeClick = (nodeName: string) => {
    setIsOpen(!isOpen);
    setOnOpenNode(nodeName);
    if (!node.categories) {
      onClickTab(nodeName);
    }
  };

  return (
    <li>
      <div className="flex items-center justify-center gap-4 mt-1">
        <div
          className={`cursor-pointer font-bold flex w-full justify-between hover:bg-gray-200 rounded-md p-2 ${
            onOpenNode === node.name ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleNodeClick(node.name)}
        >
          <p>{node.name}</p>
          {isOpen ? (
            <KeyboardArrowDownRoundedIcon />
          ) : (
            <ChevronRightRoundedIcon />
          )}
        </div>
        <CategoryCreateDialog menuName={node.name} />
      </div>

      {isOpen && node.categories && (
        <ul className="ml-6">
          {node.categories.map((category: string, index: number) => (
            <li key={index} className="list-disc">
              <div
                className={`cursor-pointer text-muted-foreground text-sm hover:bg-gray-200 rounded-md p-2 -ml-6 pl-6 mt-1 ${
                  activeTab === category ? 'bg-gray-200 font-semibold' : ''
                }`}
                onClick={() => {
                  onClickTab(category);
                  setOnOpenNode(category);
                  getPostsByCategory(category);
                }}
              >
                {category}
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

interface TreeMenuProps {
  activeTab: string;
  onClickTab: (tab: string) => void;
}

function TreeMenu(props: TreeMenuProps) {
  const { activeTab, onClickTab } = props;
  const { menus } = useContext(MenuContext);
  return (
    <section className="flex flex-col justify-between h-full">
      <ul className="mt-1">
        {menus &&
          menus.map((menu: any, index: number) => {
            return (
              <>
                <TreeNode
                  key={index}
                  node={menu}
                  activeTab={activeTab}
                  onClickTab={onClickTab}
                />
              </>
            );
          })}
      </ul>
      <MenuCreateDialog />
    </section>
  );
}

export default TreeMenu;
