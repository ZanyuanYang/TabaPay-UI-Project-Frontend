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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { ChangeEvent, useContext, useState } from 'react';
import { MenuContext } from '@/contexts/menu_context';
import { createMenuUsingPost } from '@/services/MenuController';
import { createCategoryUsingPost } from '@/services/CategoryController';

interface CategoryCreateDialogProps {
  menuName: string;
}

function CategoryCreateDialog(props: CategoryCreateDialogProps) {
  const { menuName } = props;

  const [body, setBody] = useState<API.CreateCategoryBody>({
    name: '',
  });
  const { getAllMenus } = useContext(MenuContext);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const res = await createCategoryUsingPost(body, menuName);
    console.log(res);
    if (res.status === 200) {
      await getAllMenus();
    }
  };
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <AddRoundedIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>
            Enter Category Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={() => onSubmit()}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Entertainment"
                className="col-span-3"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CategoryCreateDialog;
