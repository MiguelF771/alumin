import { LucideIcon } from 'lucide-react';

export type BaseMenu = {
  id: string;
  label: string;
};

export type SingleMenu = BaseMenu & {
  icon: LucideIcon;
};

export type MultiMenu = {
  label: string;
  icon: LucideIcon;
  submenus: BaseMenu[];
};

export type Menu = ({ mode: 'single' } & SingleMenu) | ({ mode: 'multi' } & MultiMenu);

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export type MenuList = Group[];
