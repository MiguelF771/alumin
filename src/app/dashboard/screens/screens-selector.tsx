import dynamic from 'next/dynamic';

import { useCurrentMenuContext } from '@/components/admin-panel/menu/menu-context';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const ProjectsScreen = dynamic(() => import('./projects/projects-screen'), {
  ssr: false,
  loading: LoadingSpinner,
});

export default function ScreenSelector() {
  const { activeMenu: activeMenuId } = useCurrentMenuContext();

  switch (activeMenuId.id) {
    case 'projects':
      return <ProjectsScreen />;
    default:
      return <></>;
  }
}
