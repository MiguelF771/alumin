import { useState } from 'react';

import { WindowData } from '@/lib/core/types';

import { ActionDialogsProvider } from './components/action-dialogs/action-dialogs-provider';
import { AddWindowData } from './components/add-window-data';
import { WindowsTable } from './components/windows-table/windows-table';

export default function Editor() {
  const [windows, setWindows] = useState<WindowData[]>([]);

  return (
    <>
      <AddWindowData
        nextId={windows.length + 1}
        addData={(data) => setWindows([...windows, data])}
      />
      <ActionDialogsProvider
        onEdit={(window) => setWindows(windows.map((win) => (win.id === window.id ? window : win)))}
        onDelete={(id) => setWindows(windows.filter((win) => win.id !== id))}
      >
        {windows.length > 0 && <WindowsTable windows={windows} />}
      </ActionDialogsProvider>
    </>
  );
}
