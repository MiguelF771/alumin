import { createContext, useContext } from 'react';

import { BaseMenu, MenuList } from '@/lib/menu-list';

export const MenuContext = createContext<{
  activeMenu: BaseMenu;
  setActiveMenu: (menu: BaseMenu) => void;
  menuList: MenuList;
} | null>(null);

export const useCurrentMenuContext = () => {
  const currentMenuContext = useContext(MenuContext);

  if (!currentMenuContext) {
    throw new Error('currentMenuContext has to be used within <MenuContext.Provider>');
  }

  return currentMenuContext;
};
