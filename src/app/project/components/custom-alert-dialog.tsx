import { AlertDialogTriggerProps } from '@radix-ui/react-alert-dialog';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
type ActionButton = { onClick?: () => void; label: string };
interface CustomAlertDialogProps extends AlertDialogTriggerProps {
  onOpenChange?: (open: boolean) => void;
  cancelButton?: ActionButton;
  actionButton?: ActionButton;
  title: string;
  description: string;
}

export const CustomAlertDialog = ({
  onOpenChange,
  title,
  description,
  actionButton,
  cancelButton,
  ...props
}: CustomAlertDialogProps) => {
  return (
    <AlertDialog onOpenChange={onOpenChange}>
      <AlertDialogTrigger {...props} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancelButton && (
            <AlertDialogCancel onClick={cancelButton.onClick}>
              {cancelButton.label}
            </AlertDialogCancel>
          )}
          {actionButton && (
            <AlertDialogAction onClick={actionButton.onClick}>
              {actionButton.label}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
