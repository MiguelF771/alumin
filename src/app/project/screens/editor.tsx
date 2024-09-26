import { useState } from 'react';

import { WindowData } from '@/lib/core/types';

import { AddWindowData } from '../components/add-window-data';
import { WindowsTable } from '../components/windows-table/windows-table';

export default function Editor() {
  const [windows, setWindows] = useState<WindowData[]>([]);

  return (
    <>
      <AddWindowData
        nextId={windows.length + 1}
        addData={(data) => setWindows([...windows, data])}
      />
      {windows.length > 0 ? (
        <WindowsTable
          windows={windows}
          onDelete={(row) => setWindows(windows.filter((win) => win.id !== row.id))}
          onEdit={(window) =>
            setWindows(windows.map((win) => (win.id === window.id ? window : win)))
          }
        />
      ) : (
        <></>
      )}
    </>
  );
}
