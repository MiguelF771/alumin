import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { WindowData } from '@/lib/core/types';

import { WindowDataInputs } from '../window-data-inputs';

interface EditDialogProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  windowData: WindowData;
  onSuccessfulEdition: (value: WindowData) => void;
}

export const EditDialog = ({
  onOpenChange,
  windowData: value,
  onSuccessfulEdition,
  ...props
}: EditDialogProps) => {
  const [windowData, setWindowData] = useState<Partial<WindowData>>(value);

  const isValidData = WindowData.safeParse(windowData).success;

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger {...props} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editando ventana {windowData.id}</DialogTitle>
        </DialogHeader>
        <WindowDataInputs value={windowData} onValueChange={setWindowData} />
        <DialogFooter className="gap-4">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              disabled={!isValidData}
              onClick={() => {
                onSuccessfulEdition(windowData as WindowData);
              }}
            >
              Aceptar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
