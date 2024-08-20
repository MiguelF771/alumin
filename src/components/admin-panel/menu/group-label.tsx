import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Ellipsis } from 'lucide-react';

interface GroupLabelProps {
  label: string;
}
export const GroupLabel = ({ label }: GroupLabelProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger className="w-full">
          <div className="flex w-full items-center justify-center">
            <Ellipsis className="h-5 w-5" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
