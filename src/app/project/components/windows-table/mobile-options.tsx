import { Ellipsis, NotebookText, Pen, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { WindowData } from '@/lib/core/types';

import { useActionDialogs } from '../../hooks/use-dialogs';

interface MobileOptionsProps {
  windowData: WindowData;
}

export const MobileOptions = ({ windowData }: MobileOptionsProps) => {
  const dialog = useActionDialogs();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="md:hidden" variant="outline" size="icon">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {windowData.notes && (
          <DropdownMenuItem onClick={() => dialog({ action: 'notes', windowData })}>
            <NotebookText className="mr-2 h-6" /> Ver notas
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => dialog({ action: 'edit', windowData })}>
          <Pen className="mr-2 h-6" /> Editar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dialog({ action: 'delete', windowData })}>
          <Trash2 className="mr-2 h-6 stroke-destructive" />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
