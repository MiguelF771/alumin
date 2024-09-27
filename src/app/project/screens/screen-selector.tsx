import dynamic from 'next/dynamic';

import { useCurrentMenuContext } from '@/components/admin-panel/menu/menu-context';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const Editor = dynamic(() => import('./editor/editor-screen'), {
  ssr: false,
  loading: LoadingSpinner,
});

const ProfilesQuantity = dynamic(() => import('./profiles-quantity'), {
  ssr: false,
  loading: LoadingSpinner,
});

export default function ScreenSelector() {
  const { activeMenu: activeMenuId } = useCurrentMenuContext();

  switch (activeMenuId.id) {
    case 'editor':
      return <Editor />;
    case 'perfiles-cantidad':
      return <ProfilesQuantity />;
    default:
      return <></>;
  }
}
