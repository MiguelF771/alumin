import { useState } from 'react';
import { ZodError } from 'zod';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { WindowData } from '@/lib/core/types';

import { WindowDataInputs } from './window-data-inputs';

interface AddWindowDataProps {
  nextId: number;
  addData: (windowData: WindowData) => void;
}

const defaultWindowData: Partial<WindowData> = { sheets: 2 };
export const AddWindowData = ({ nextId, addData }: AddWindowDataProps) => {
  const [windowData, setWindowData] = useState<Partial<WindowData>>(defaultWindowData);
  const { toast } = useToast();
  return (
    <>
      <WindowDataInputs value={windowData} onValueChange={setWindowData} />
      <div className="my-4 flex gap-4">
        <Button
          className="grow"
          variant="secondary"
          onClick={() => setWindowData(defaultWindowData)}
        >
          Limpiar
        </Button>
        <Button
          className="grow"
          onClick={() => {
            try {
              console.log(windowData);

              const data = WindowData.parse({ ...windowData, id: nextId });
              addData(data);
              setWindowData(defaultWindowData);
              toast({
                variant: 'default',
                title: `Ventana ${nextId} añadida`,
              });
            } catch (error) {
              toast({
                variant: 'destructive',
                title: (error as ZodError).errors[0].message,
              });
            }
          }}
        >
          Añadir
        </Button>
      </div>
    </>
  );
};
