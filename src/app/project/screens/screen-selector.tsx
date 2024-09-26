import dynamic from 'next/dynamic';

import { useCurrentMenuContext } from '@/components/admin-panel/menu/menu-context';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

const Editor = dynamic(() => import('./editor'), {
  ssr: false,
  loading: LoadingSpinner,
});

const PerfilesCantidad = dynamic(() => import('./perfiles-cantidad'), {
  ssr: false,
  loading: LoadingSpinner,
});

export default function ScreenSelector() {
  const { activeMenu: activeMenuId } = useCurrentMenuContext();

  switch (activeMenuId.id) {
    case 'editor':
      return <Editor />;
    case 'perfiles-cantidad':
      return <PerfilesCantidad />;
    default:
      return <></>;
  }
}
