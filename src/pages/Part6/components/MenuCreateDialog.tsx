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
import { ChangeEvent, useContext, useState } from 'react';
import { createMenuUsingPost } from '@/services/MenuController';
import { MenuContext } from '@/contexts/menu_context';

function MenuCreateDialog() {
  const [body, setBody] = useState<API.CreateMenuBody>({
    name: '',
  });
  const { getAllMenus } = useContext(MenuContext);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const res = await createMenuUsingPost(body);
    if (res.status === 200) {
      getAllMenus();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Menu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Menu</DialogTitle>
          <DialogDescription>
            Enter Menu Click save when you're done.
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

export default MenuCreateDialog;
