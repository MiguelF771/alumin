import { NotebookText, Pen, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { WindowData } from '@/lib/core/types';

import { useActionDialogs } from '../../hooks/use-dialogs';

interface OptionsProps {
  windowData: WindowData;
}
export const Options = ({ windowData }: OptionsProps) => {
  const dialog = useActionDialogs();
  return (
    <div className="hidden justify-end gap-4 md:flex">
      {windowData.notes && (
        <Button
          onClick={() => dialog({ action: 'notes', windowData })}
          variant="secondary"
          size="icon"
        >
          <NotebookText />
        </Button>
      )}
      <Button
        onClick={() => dialog({ action: 'edit', windowData })}
        variant="secondary"
        size="icon"
      >
        <Pen />
      </Button>

      <Button
        onClick={() => dialog({ action: 'delete', windowData })}
        variant="destructive"
        size="icon"
      >
        <Trash2 />
      </Button>
    </div>
  );
};
