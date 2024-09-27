import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { WindowData } from '@/lib/core/types';

interface NotesDialogProps {
  onOpenChange?: (open: boolean) => void;
  windowData: WindowData;
}

export const NotesDialog = ({ windowData, onOpenChange }: NotesDialogProps) => {
  return (
    <AlertDialog open onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`Ventana ${windowData.id}`}</AlertDialogTitle>
          <AlertDialogDescription>{windowData.notes}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cerrar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
