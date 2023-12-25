declare namespace API {
  type Menu = {
    _id: string;
    name: string;
    categories: Array;
  };
  type CreateMenuBody = {
    name: string;
  };

  type CreateCategoryBody = {
    name: string;
  };

  type PostListItem = {
    name: string;
    description: string;
    websiteLink: string;
    imageUrl: string;
  };

  type CreatePostBody = {
    title: string;
    imageUrl: string;
    introduction: string;
    category: string;
    lists: PostListItem[];
  };

  type PostItem = {
    _id: string;
    name: string;
    description: string;
    websiteLink: string;
    imageUrl: string;
  };

  type Post = {
    _id: string;
    title: string;
    imageUrl: string;
    introduction: string;
    category: string;
    like: number;
    lists: PostItem[];
    createdAt: string;
  };
}
