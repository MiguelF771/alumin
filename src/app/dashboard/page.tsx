'use client';

import { useState } from 'react';

import { ContentLayout } from '@/components/admin-panel/content-layout';
import { MenuContext } from '@/components/admin-panel/menu/menu-context';
import { PanelLayout } from '@/components/admin-panel/panel-layout';
import { Toaster } from '@/components/ui/toaster';

import { dashboardMenuList } from './menu-list';
import ScreenSelector from './screens/screens-selector';

export default function ProjectPage() {
  const [activeMenu, setActiveMenu] = useState({ id: 'projects', label: 'Proyectos' });
  return (
    <>
      <MenuContext.Provider value={{ activeMenu, setActiveMenu, menuList: dashboardMenuList }}>
        <PanelLayout>
          <ContentLayout title={activeMenu.label}>
            <ScreenSelector />
          </ContentLayout>
        </PanelLayout>
      </MenuContext.Provider>
      <Toaster />
    </>
  );
}
