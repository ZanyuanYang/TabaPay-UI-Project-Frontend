import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type AlertConfirmDialogProps = {
  dialogOpen: boolean;
  setDialogOpen: (dialogOpen: boolean) => void;
  title: string;
  description: string;
  onClickConfirm: (activeTab: string, postId: string) => void;
  activeTab: string;
  postId: string;
};

function AlertConfirmDialog(props: AlertConfirmDialogProps) {
  const {
    dialogOpen,
    setDialogOpen,
    title,
    description,
    onClickConfirm,
    activeTab,
    postId,
  } = props;
  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onClickConfirm(activeTab, postId)}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertConfirmDialog;
