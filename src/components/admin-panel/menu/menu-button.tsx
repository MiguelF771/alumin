import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface MenuButtonProps {
  active: boolean;
  href: string;
  isOpen: boolean | undefined;
  icon: LucideIcon;
  label: string;
}

export const MenuButton = ({ active, href, isOpen, icon: Icon, label }: MenuButtonProps) => {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={active ? 'secondary' : 'ghost'}
            className="mb-1 h-10 w-full justify-start"
            asChild
          >
            <Link href={href}>
              <span className={cn(isOpen === false ? '' : 'mr-4')}>
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  'max-w-[200px] truncate',
                  isOpen === false ? '-translate-x-96 opacity-0' : 'translate-x-0 opacity-100',
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        </TooltipTrigger>
        {isOpen === false && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};
