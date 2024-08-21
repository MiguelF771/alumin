'use client';

import { CollapseMenuButton } from '@/components/admin-panel/menu/collapse-menu-button';
import { GroupLabel } from '@/components/admin-panel/menu/group-label';
import { MenuButton } from '@/components/admin-panel/menu/menu-button';
import { useCurrentMenuContext } from '@/components/admin-panel/menu/menu-context';
import { SignOutButton } from '@/components/admin-panel/menu/sign-out-button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface MenuProps {
  isOpen: boolean;
  onClickOption?: ({ id, label }: { id: string; label: string }) => void;
}

export const Menu = ({ isOpen, onClickOption }: MenuProps) => {
  const { activeMenu, setActiveMenu, menuList } = useCurrentMenuContext();

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
              {menus.map((menu, index) =>
                menu.mode === 'single' ? (
                  <div className="w-full" key={index}>
                    <MenuButton
                      {...menu}
                      onClick={(e) => {
                        setActiveMenu(e);
                        if (onClickOption) onClickOption(e);
                      }}
                      active={menu.id === activeMenu.id}
                      isOpen={isOpen}
                    />
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      {...menu}
                      onClick={(e) => {
                        setActiveMenu(e);
                        if (onClickOption) onClickOption(e);
                      }}
                      activeMenuId={activeMenu.id}
                      isOpen={isOpen}
                    />
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
