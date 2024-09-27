import { SelectProps } from '@radix-ui/react-select';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
interface SheetsSelectorProps extends SelectProps {
  id?: string;
}
export const SheetsSelector = ({ id, ...props }: SheetsSelectorProps) => {
  return (
    <Select {...props}>
      <SelectTrigger id={id}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
      </SelectContent>
    </Select>
  );
};
