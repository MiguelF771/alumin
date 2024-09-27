import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { WindowData } from '@/lib/core/types';

import { MobileOptions } from './mobile-options';
import { Options } from './options';

interface TableDataViewProps {
  windows: WindowData[];
}

export const WindowsTable = ({ windows }: TableDataViewProps) => {
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
                <Options windowData={windowData} />
                <MobileOptions windowData={windowData} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
