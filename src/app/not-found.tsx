import Link from 'next/link';

import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <ContentLayout title="404">
      <div className="flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="mb-4 text-lg font-bold text-red-600 dark:text-red-500">
            Oops! Algo salio mal.
          </h2>
          <h1 className="text-8xl font-bold">404</h1>
          <p className="mb-8 text-lg">La página que estás buscando no existe.</p>
          <Button>
            <Link href="/" prefetch={false}>
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </ContentLayout>
  );
}
