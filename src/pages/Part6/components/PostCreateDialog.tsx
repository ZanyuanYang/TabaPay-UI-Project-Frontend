import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Divider from '@mui/material/Divider';
import { ChangeEvent, useContext, useState } from 'react';
import { createPostUsingPost } from '@/services/PostController';
import { AuthContext } from '@/contexts/auth_context';
import { MenuContext } from '@/contexts/menu_context';

interface PostCreateDialogProps {
  category: string;
}

function PostCreateDialog(props: PostCreateDialogProps) {
  const { category } = props;
  const { setSuccessDescription } = useContext(AuthContext);
  const { getPostsByCategory } = useContext(MenuContext);
  const [open, setOpen] = useState<boolean>(false);
  const [body, setBody] = useState<API.CreatePostBody>({
    title: '',
    imageUrl: '',
    introduction: '',
    category: category,
    lists: [],
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const onItemChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const updatedItems = [...body.lists];
    updatedItems[index] = {
      ...updatedItems[index],
      [e.target.name]: e.target.value,
    };
    setBody({ ...body, lists: updatedItems });
  };

  const addItem = () => {
    setBody({
      ...body,
      lists: [
        ...body.lists,
        {
          name: '',
          description: '',
          websiteLink: '',
          imageUrl: '',
        },
      ],
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const res = await createPostUsingPost(body);
    if (res.status === 201) {
      setBody({
        title: '',
        imageUrl: '',
        introduction: '',
        category: category,
        lists: [],
      });
      getPostsByCategory(category);
      setOpen(false);
      setSuccessDescription('Create Post Successfully');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Create Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] overflow-y-auto max-h-[800px]">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Title"
                className="col-span-5"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="imageUrl" className="text-right">
                Image Url
              </Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="Image Url"
                className="col-span-5"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="introduction" className="text-right">
                Introduction
              </Label>
              <Input
                id="introduction"
                name="introduction"
                placeholder="Introduction"
                className="col-span-5"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <Divider light />
            <div className="grid grid-cols-6 items-center gap-4">
              <Label htmlFor="introduction" className="text-right">
                Items
              </Label>
              <Button type="button" variant="secondary" onClick={addItem}>
                Create Item
              </Button>
            </div>
            {body.lists.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-6 items-center gap-4 border-2 p-4 rounded-xl"
              >
                <Label
                  htmlFor={`name-${index}`}
                  className="col-span-1 text-right"
                >
                  Name
                </Label>
                <Input
                  id={`name-${index}`}
                  name="name"
                  placeholder="Item Name"
                  value={item.name}
                  onChange={(e) => onItemChange(index, e)}
                  className="col-span-5"
                  required
                />
                <Label
                  htmlFor={`description-${index}`}
                  className="col-span-1 text-right"
                >
                  Description
                </Label>
                <Input
                  id={`description-${index}`}
                  name="description"
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => onItemChange(index, e)}
                  className="col-span-5"
                  required
                />
                <Label
                  htmlFor={`websiteLink-${index}`}
                  className="col-span-1 text-right"
                >
                  Website Link
                </Label>
                <Input
                  id={`websiteLink-${index}`}
                  name="websiteLink"
                  placeholder="Website Link"
                  value={item.websiteLink}
                  type="url"
                  onChange={(e) => onItemChange(index, e)}
                  className="col-span-5"
                />
                <Label
                  htmlFor={`imageUrl-${index}`}
                  className="col-span-1 text-right"
                >
                  Image URL
                </Label>
                <Input
                  id={`imageUrl-${index}`}
                  name="imageUrl"
                  placeholder="Image URL"
                  type="url"
                  value={item.imageUrl}
                  onChange={(e) => onItemChange(index, e)}
                  className="col-span-5"
                  required
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PostCreateDialog;
