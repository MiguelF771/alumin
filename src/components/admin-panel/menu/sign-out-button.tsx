import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';

interface SignOutButtonProps {
  isOpen: boolean | undefined;
}

export const SignOutButton = ({ isOpen }: SignOutButtonProps) => {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button onClick={() => {}} variant="outline" className="mt-5 h-10 w-full justify-center">
            <span className={cn(isOpen === false ? '' : 'mr-4')}>
              <LogOut size={18} />
            </span>
            <p
              className={cn(
                'whitespace-nowrap',
                isOpen === false ? 'hidden opacity-0' : 'opacity-100',
              )}
            >
              Sign out
            </p>
          </Button>
        </TooltipTrigger>
        {isOpen === false && <TooltipContent side="right">Sign out</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};
