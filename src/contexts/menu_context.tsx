import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllMenusUsingGet } from '@/services/MenuController';
import {
  getPostsByCategoryUsingGet,
  likePostUsingPost,
} from '@/services/PostController';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '@/contexts/auth_context';

type MenuContextProviderProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  menus: API.Menu[];
  setMenus: React.Dispatch<React.SetStateAction<API.Menu[]>>;
  posts: API.Post[];
  getPostsByCategory: (category: string) => Promise<void>;
  onOpenNode: string;
  setOnOpenNode: React.Dispatch<React.SetStateAction<string>>;
  getAllMenus: () => Promise<void>;
  likePost: (category: string, postId: string) => Promise<void>;
  activeTab: string;
  onClickTab: (tab: string) => void;
};

const MenuContext = createContext<MenuContextType>({
  menus: [],
  setMenus: () => {},
  posts: [],
  getPostsByCategory: async () => {},
  onOpenNode: '',
  setOnOpenNode: () => {},
  getAllMenus: async () => {},
  likePost: async () => {},
  activeTab: '',
  onClickTab: () => {},
});

function MenuProvider({ children }: MenuContextProviderProps) {
  const { setFetchLoading } = useContext(AuthContext);

  // State management for menus, posts, open node, and active tab.
  const [menus, setMenus] = useState<API.Menu[]>([]);
  const [posts, setPosts] = useState<API.Post[]>([]);
  const [onOpenNode, setOnOpenNode] = useState<string>('');
  const [activeTabParams, setActiveTabParams] = useSearchParams({ tab: '' });
  const activeTab = activeTabParams.get('tab') || '';

  // Function to handle tab clicks and update URL search params.
  const onClickTab = (tab: string) => {
    setActiveTabParams(
      (prev: any) => {
        prev.set('tab', tab);
        return prev;
      },
      { replace: true }
    );
  };

  // Function to retrieve all menus.
  const getAllMenus = async () => {
    const res = await getAllMenusUsingGet();
    console.log(res.data);
    if (res.status === 200) {
      setMenus(res.data);
    }
  };

  // Function to get posts by category.
  const getPostsByCategory = async (category: string) => {
    try {
      setFetchLoading(true);
      const res = await getPostsByCategoryUsingGet(category);
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setFetchLoading(false);
    }
  };

  // Function to like a post.
  const likePost = async (category: string, postId: string) => {
    await likePostUsingPost(category, postId);
    setPosts(
      posts.map((post: API.Post) =>
        post._id === postId ? { ...post, like: post.like + 1 } : post
      )
    );
  };

  // Effect to fetch all menus on component mount.
  useEffect(() => {
    getAllMenus();
  }, []);

  // Effect to fetch posts when the active tab changes.
  useEffect(() => {
    getPostsByCategory(activeTab);
  }, [activeTab]);

  return (
    <MenuContext.Provider
      value={{
        menus,
        setMenus,
        posts,
        getPostsByCategory,
        onOpenNode,
        setOnOpenNode,
        getAllMenus,
        likePost,
        activeTab,
        onClickTab,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuProvider, MenuContext };
