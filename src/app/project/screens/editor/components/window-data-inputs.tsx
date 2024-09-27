import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { WindowData } from '@/lib/core/types';

import { SheetsSelector } from './sheets-selector';

interface WindowDataInputsProps {
  value: Partial<WindowData>;
  onValueChange: (value: Partial<WindowData>) => void;
}

export const WindowDataInputs = ({ value, onValueChange }: WindowDataInputsProps) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="grow">
          <Label htmlFor="high-input" className="text-right">
            Alto [cm]
          </Label>
          <Input
            id="high-input"
            type="number"
            value={String(value.high ?? '')}
            onChange={(e) =>
              onValueChange &&
              onValueChange({
                ...value,
                high: e.target.value !== '' ? Number(e.target.value) : undefined,
              })
            }
          />
        </div>
        <div className="grow">
          <Label htmlFor="width-input" className="text-right">
            Ancho [cm]
          </Label>
          <Input
            id="width-input"
            type="number"
            value={String(value.width ?? '')}
            onChange={(e) =>
              onValueChange &&
              onValueChange({
                ...value,
                width: e.target.value !== '' ? Number(e.target.value) : undefined,
              })
            }
          />
        </div>
        <div className="w-32">
          <Label htmlFor="sheets-input" className="text-right">
            Hojas
          </Label>
          <SheetsSelector
            id="sheets-input"
            value={String(value.sheets ?? 2)}
            onValueChange={(sheetValue) =>
              onValueChange && onValueChange({ ...value, sheets: Number(sheetValue) })
            }
          />
        </div>
      </div>
      <div className="my-2">
        <Label htmlFor="notes-input" className="text-right">
          Notas
        </Label>
        <Textarea
          id="notes-input"
          value={value.notes ?? ''}
          onChange={(e) => onValueChange && onValueChange({ ...value, notes: e.target.value })}
        />
      </div>
    </>
  );
};
