import { Pen, SplitSquareHorizontal } from 'lucide-react';

import { MenuList } from '@/lib/menu-list';
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
        mode: 'multi',
        label: 'Perfiles',
        icon: SplitSquareHorizontal,
        submenus: [
          {
            id: 'perfiles-cantidad',
            label: 'Cantidad',
          },
          { id: 'perfiles-cortes', label: 'Cortes' },
        ],
      },
    ],
  },
];
