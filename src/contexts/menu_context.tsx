import React, { createContext, useEffect, useState } from 'react';
import { getAllMenusUsingGet } from '@/services/MenuController';
import {
  getPostsByCategoryUsingGet,
  likePostUsingPost,
} from '@/services/PostController';
import { useSearchParams } from 'react-router-dom';

type MenuContextProviderProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  menus: API.Menu[];
  setMenus: React.Dispatch<React.SetStateAction<API.Menu[]>>;
  posts: API.Post[];
  getPostsByCategory: (category: string) => void;
  onOpenNode: string;
  setOnOpenNode: React.Dispatch<React.SetStateAction<string>>;
  getAllMenus: () => Promise<void>;
  likePost: (category: string, postId: string) => Promise<void>;
};

const MenuContext = createContext<MenuContextType>({
  menus: [],
  setMenus: () => {},
  posts: [],
  getPostsByCategory: () => {},
  onOpenNode: '',
  setOnOpenNode: () => {},
  getAllMenus: async () => {},
  likePost: async () => {},
});

function MenuProvider({ children }: MenuContextProviderProps) {
  const [menus, setMenus] = useState<API.Menu[]>([]);
  const [posts, setPosts] = useState<API.Post[]>([]);
  const [onOpenNode, setOnOpenNode] = useState<string>('');

  const getAllMenus = async () => {
    const res = await getAllMenusUsingGet();
    console.log(res.data);
    if (res.status === 200) {
      setMenus(res.data);
    }
  };

  const getPostsByCategory = async (category: string) => {
    const res = await getPostsByCategoryUsingGet(category);
    setPosts(res.data);
  };

  const likePost = async (category: string, postId: string) => {
    await likePostUsingPost(category, postId);
    setPosts(
      posts.map((post: API.Post) =>
        post._id === postId
          ? { ...post, like: post.like && post.like + 1 }
          : post
      )
    );
  };

  useEffect(() => {
    getAllMenus();
  }, []);

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
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuProvider, MenuContext };
