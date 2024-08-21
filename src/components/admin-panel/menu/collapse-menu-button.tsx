'use client';

import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Dot } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BaseMenu, MultiMenu } from '@/lib/menu-list';
import { cn } from '@/lib/utils';

type CollapseMenuButtonProps = {
  activeMenuId: string;
  isOpen: boolean;
  onClick: (menu: BaseMenu) => void;
} & MultiMenu;

export const CollapseMenuButton = ({
  icon: Icon,
  label,
  activeMenuId,
  submenus,
  isOpen,
  onClick,
}: CollapseMenuButtonProps) => {
  const isSubmenuActive = submenus.some((submenu) => submenu.id === activeMenuId);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return isOpen ? (
    <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed} className="w-full">
      <CollapsibleTrigger className="mb-1 [&[data-state=open]>div>div>svg]:rotate-180" asChild>
        <Button
          variant={isSubmenuActive ? 'secondary' : 'ghost'}
          className="h-10 w-full justify-start"
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  'max-w-[150px] truncate',
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                'whitespace-nowrap',
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
              )}
            >
              <ChevronDown size={18} className="transition-transform duration-200" />
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        {submenus.map(({ id, label }, index) => (
          <Button
            key={index}
            variant={id === activeMenuId ? 'secondary' : 'ghost'}
            className="mb-1 h-10 w-full justify-start"
            onClick={() => onClick({ id, label })}
          >
            <span className="ml-2 mr-4">
              <Dot size={18} />
            </span>
            <p
              className={cn(
                'max-w-[170px] truncate',
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0',
              )}
            >
              {label}
            </p>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={isSubmenuActive ? 'secondary' : 'ghost'}
                className="mb-1 h-10 w-full justify-start"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? '' : 'mr-4')}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        'max-w-[200px] truncate',
                        isOpen === false ? 'opacity-0' : 'opacity-100',
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ id, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Button
              variant={id === activeMenuId ? 'secondary' : 'ghost'}
              className="my-1 flex h-9 w-full cursor-pointer justify-start"
              onClick={() => onClick({ id, label })}
            >
              <p className="max-w-[180px] truncate">{label}</p>
            </Button>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
