import { AlertDialogTriggerProps } from '@radix-ui/react-alert-dialog';

import { CustomAlertDialog } from '../custom-alert-dialog';

interface DialogProps extends AlertDialogTriggerProps {
  onOpenChange?: (open: boolean) => void;
  windowId: string;
  onClick: () => void;
}

export const DeleteDialog = ({ windowId, onClick, onOpenChange, ...props }: DialogProps) => {
  return (
    <CustomAlertDialog
      onOpenChange={onOpenChange}
      title={`¿Esta seguro de eliminar la ventana ${windowId}?`}
      description={`Esta acción no se puede deshacer. Esto eliminará permanentemente los datos de la ventana ${windowId}.`}
      actionButton={{ label: 'Eliminar', onClick }}
      cancelButton={{ label: 'Cancelar' }}
      {...props}
    />
  );
};
