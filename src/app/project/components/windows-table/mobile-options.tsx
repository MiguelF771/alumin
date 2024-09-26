import { Ellipsis, NotebookText, Pen, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { WindowData } from '@/lib/core/types';

import { CustomAlertDialog } from '../custom-alert-dialog';
import { DeleteDialog } from './delete-dialog';
import { EditDialog } from './edit-dialog';

interface MobileOptionsProps {
  windowData: WindowData;
  onDelete: (window: WindowData) => void;
  onEdit: (window: WindowData) => void;
}

export const MobileOptions = ({ windowData, onDelete, onEdit }: MobileOptionsProps) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {windowData.notes && (
          <DropdownMenuItem asChild>
            <CustomAlertDialog
              onOpenChange={setOpen}
              className="w-full"
              title={`Ventana ${windowData.id}`}
              description={windowData.notes}
              cancelButton={{ label: 'Cerrar' }}
            >
              <NotebookText className="mr-2 h-6" /> Ver notas
            </CustomAlertDialog>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="w-full" asChild>
          <EditDialog onOpenChange={setOpen} windowData={windowData} onSuccessfulEdition={onEdit}>
            <Pen className="mr-2 h-6" /> Editar
          </EditDialog>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <DeleteDialog
            onOpenChange={setOpen}
            windowId={String(windowData.id)}
            onClick={() => onDelete(windowData)}
            className="w-full"
          >
            <Trash2 className="mr-2 h-6 stroke-destructive" />
            Eliminar
          </DeleteDialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
