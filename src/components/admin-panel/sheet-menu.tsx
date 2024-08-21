'use client';
import { MenuIcon, PanelsTopLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Menu } from '@/components/admin-panel/menu/menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export const SheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetTitle />
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Button className="flex items-center justify-center pb-2 pt-1" variant="link" asChild>
            <Link href="/" className="flex items-center gap-2">
              <PanelsTopLeft className="mr-1 h-6 w-6" />
              <h1 className="text-lg font-bold">Alumin</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen onClickOption={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};
