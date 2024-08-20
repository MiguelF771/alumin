'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { getMenuList } from '@/lib/menu-list';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CollapseMenuButton } from './collapse-menu-button';
import { SignOutButton } from './sign-out-button';
import { MenuButton } from './menu-button';
import { GroupLabel } from './group-label';

interface MenuProps {
  isOpen: boolean | undefined;
}

export const Menu = ({ isOpen }: MenuProps) => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="h-full w-full">
        <ul className="flex min-h-[calc(100vh-48px-36px-16px-32px)] flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <GroupLabel label={groupLabel} />
              ) : (
                <p className="pb-2"></p>
              )}
              {menus.map(({ submenus, ...buttonProps }, index) =>
                submenus === undefined || submenus.length === 0 ? (
                  <div className="w-full" key={index}>
                    <MenuButton {...buttonProps} isOpen={isOpen} />
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton {...buttonProps} submenus={submenus} isOpen={isOpen} />
                  </div>
                ),
              )}
            </li>
          ))}
          <li className="flex w-full grow items-end">
            <SignOutButton isOpen={isOpen} />
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
};
