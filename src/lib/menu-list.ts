import { Clock, Files, LucideIcon, Pen, Settings, TestTube, Trash2 } from 'lucide-react';

export type BaseMenu = {
  id: string;
  label: string;
};

export type SingleMenu = {
  id: string;
  label: string;
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

export const dashboardMenuList: MenuList = [
  {
    groupLabel: '',
    menus: [
      {
        id: 'resent-proyects',
        mode: 'single',
        label: 'Proyectos recientes',
        icon: Clock,
      },
      {
        id: 'all-proyects',
        mode: 'single',
        label: 'Todos los proyectos',
        icon: Files,
      },
      {
        id: 'drafts',
        mode: 'single',
        label: 'Papelera',
        icon: Trash2,
      },
    ],
  },
  {
    groupLabel: 'Settings',
    menus: [
      {
        id: 'settings',
        mode: 'single',
        label: 'Ajustes',
        icon: Settings,
      },
    ],
  },
];

export const projectMenuList: MenuList = [
  {
    groupLabel: '',
    menus: [
      {
        mode: 'single',
        id: 'editor',
        icon: Pen,
        label: 'Editar',
      },
      {
        mode: 'single',
        id: 'test',
        icon: TestTube,
        label: 'Test',
      },
      {
        mode: 'multi',
        label: 'Editar',
        icon: Pen,
        submenus: [
          { id: 'submenu1', label: 'Submenu1' },
          { id: 'submenu2', label: 'Submenu2' },
        ],
      },
    ],
  },
];
