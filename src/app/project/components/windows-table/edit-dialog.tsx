import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { WindowData } from '@/lib/core/types';

import { WindowDataInputs } from '../window-data-inputs';

interface EditDialogProps {
  onOpenChange?: (open: boolean) => void;
  windowData?: WindowData;
  onEdit: (value: WindowData) => void;
}

export const EditDialog = ({ onOpenChange, windowData: value, onEdit }: EditDialogProps) => {
  const [windowData, setWindowData] = useState<Partial<WindowData>>({ ...value });

  const isValidData = WindowData.safeParse(windowData).success;

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editando ventana {windowData.id}</DialogTitle>
        </DialogHeader>
        <DialogDescription />
        <WindowDataInputs value={windowData} onValueChange={setWindowData} />
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={!isValidData} onClick={() => onEdit(windowData as WindowData)}>
              Aceptar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
