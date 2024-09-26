import { NotebookText, Pen, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { WindowData } from '@/lib/core/types';

import { CustomAlertDialog } from '../custom-alert-dialog';
import { DeleteDialog } from './delete-dialog';
import { EditDialog } from './edit-dialog';
import { MobileOptions } from './mobile-options';

interface TableDataViewProps {
  onDelete: (window: WindowData) => void;
  onEdit: (window: WindowData) => void;
  windows: WindowData[];
}

export const WindowsTable = ({ windows, onDelete, onEdit }: TableDataViewProps) => {
  return (
    <div className="rounded-md border p-1">
      <Table className="lg:text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="font-black">#</TableHead>
            <TableHead className="font-black">
              Alto <br />
              {'[cm]'}
            </TableHead>
            <TableHead className="font-black">
              Ancho <br />
              {'[cm]'}
            </TableHead>
            <TableHead className="font-black">Hojas</TableHead>
            <TableHead className="font-black">Notas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {windows.map((windowData) => (
            <TableRow key={windowData.id}>
              <TableCell className="font-black">{windowData.id}</TableCell>
              <TableCell>{windowData.high}</TableCell>
              <TableCell>{windowData.width}</TableCell>
              <TableCell>{windowData.sheets}</TableCell>
              <TableCell>
                <span className="flex w-14 md:w-48 lg:w-64">
                  <span className="truncate">{windowData.notes}</span>
                </span>
              </TableCell>
              <TableCell>
                <div className="hidden justify-end gap-4 md:flex">
                  {windowData.notes && (
                    <CustomAlertDialog
                      asChild
                      title={`Ventana ${windowData.id}`}
                      description={windowData.notes}
                      cancelButton={{ label: 'Cerrar' }}
                    >
                      <Button variant="secondary" size="icon">
                        <NotebookText />
                      </Button>
                    </CustomAlertDialog>
                  )}
                  <Button asChild variant="secondary" size="icon">
                    <EditDialog windowData={windowData} onSuccessfulEdition={() => {}}>
                      <Pen />
                    </EditDialog>
                  </Button>
                  <DeleteDialog
                    asChild
                    windowId={String(windowData.id)}
                    onClick={() => onDelete(windowData)}
                  >
                    <Button variant="destructive" size="icon">
                      <Trash2 />
                    </Button>
                  </DeleteDialog>
                </div>
                <MobileOptions windowData={windowData} onDelete={onDelete} onEdit={onEdit} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
