import { Files } from 'lucide-react';

import { MenuList } from '@/lib/menu-list';
export const dashboardMenuList: MenuList = [
  {
    groupLabel: '',
    menus: [
      {
        mode: 'single',
        id: 'projects',
        icon: Files,
        label: 'Proyectos',
      },
    ],
  },
];
