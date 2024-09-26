import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <h1 className="text-5xl">Alumin</h1>
      <p>
        Alumin es un proyecto en desarroyo para el calculo y optimisacion de materiales para
        ventanas de aluminio.
      </p>
      <Button asChild>
        <Link href="/project">Ir a proyecto</Link>
      </Button>
    </main>
  );
}
