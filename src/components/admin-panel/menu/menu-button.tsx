import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BaseMenu, SingleMenu } from '@/lib/menu-list';
import { cn } from '@/lib/utils';

type MenuButtonProps = {
  isOpen: boolean;
  active: boolean;
  onClick: (menu: BaseMenu) => void;
} & SingleMenu;

export const MenuButton = ({ id, isOpen, icon: Icon, label, active, onClick }: MenuButtonProps) => {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={active ? 'secondary' : 'ghost'}
            className="mb-1 h-10 w-full justify-start"
            onClick={() => onClick({ id, label })}
          >
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
          </Button>
        </TooltipTrigger>
        {isOpen === false && <TooltipContent side="right">{label}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};
