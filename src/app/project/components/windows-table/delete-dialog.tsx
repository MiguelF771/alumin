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

interface DeleteDialogProps {
  onOpenChange?: (open: boolean) => void;
  windowId: number;
  onDelete: (id: number) => void;
}

export const DeleteDialog = ({ windowId, onDelete, onOpenChange }: DeleteDialogProps) => {
  return (
    <AlertDialog open onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`¿Esta seguro de eliminar la ventana ${windowId}?`}</AlertDialogTitle>
          <AlertDialogDescription>{`Esta acción no se puede deshacer. Esto eliminará permanentemente los datos de la ventana ${windowId}.`}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => onDelete(windowId)}>Eliminar</AlertDialogAction>
          <AlertDialogCancel>Canelar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
