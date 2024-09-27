import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ProjectsScreen() {
  return (
    <Button
      className="absolute bottom-6 right-6 size-16 rounded-full sm:hidden"
      variant="secondary"
    >
      <Plus />
    </Button>
  );
}
