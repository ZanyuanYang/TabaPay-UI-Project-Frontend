import { Link } from 'react-router-dom';
import { MenuContext } from '@/contexts/menu_context';
import React, { useContext, useState } from 'react';
import moment from 'moment';
import { IconButton } from '@mui/material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePostByIdUsingPost } from '@/services/PostController';
import AlertConfirmDialog from '@/components/AlertConfirmDialog';
import { AuthContext } from '@/contexts/auth_context';

function CategoryLists() {
  const { posts, likePost, getPostsByCategory, activeTab } =
    useContext(MenuContext);
  const { setSuccessDescription } = useContext(AuthContext);
  const [alertConfirmDialogOpen, setAlertConfirmDialogOpen] =
    useState<boolean>(false);
  const [alertConfirmDialogTitle, setAlertConfirmDialogTitle] =
    useState<string>('');
  const [alertConfirmDialogDescription, setAlertConfirmDialogDescription] =
    useState<string>('');
  const [deletedId, setDeletedId] = useState<string>('');

  const onClickDeletePostById = async (category: string, postId: string) => {
    const res = await deletePostByIdUsingPost(category, postId);
    if (res.status === 200) {
      getPostsByCategory(category);
      setAlertConfirmDialogOpen(false);
      setSuccessDescription('Delete Post Successfully');
    }
  };

  const onClickDeletePostBtn = (postId: string) => {
    setDeletedId(postId);
    setAlertConfirmDialogTitle('Delete Post');
    setAlertConfirmDialogDescription('Delete Post Successfully');
    setAlertConfirmDialogOpen(true);
  };
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post._id}
          className="flex flex-col items-start justify-between"
        >
          <Link
            to={`/post/${post.category}/${post._id}`}
            className="relative w-full"
          >
            <img
              src={post.imageUrl}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </Link>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.createdAt} className="text-muted-foreground">
                {moment(post.createdAt).format('MMMM Do YYYY')}
              </time>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
                <Link to={`/post/${post.category}/${post._id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {post.introduction && post.introduction.length > 300
                  ? `${post.introduction.slice(0, 250)}...`
                  : post.introduction}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full justify-end">
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => onClickDeletePostBtn(post._id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="add to favorites"
              size="small"
              onClick={() => likePost(activeTab, post._id)}
            >
              <FavoriteBorderRoundedIcon />
            </IconButton>
            <p className="text-sm">{post.like}</p>
          </div>
        </article>
      ))}
      <AlertConfirmDialog
        dialogOpen={alertConfirmDialogOpen}
        setDialogOpen={setAlertConfirmDialogOpen}
        title={alertConfirmDialogTitle}
        description={alertConfirmDialogDescription}
        activeTab={activeTab}
        postId={deletedId}
        onClickConfirm={onClickDeletePostById}
      />
    </div>
  );
}
export default CategoryLists;
