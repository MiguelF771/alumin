import { createContext, useState } from 'react';

import { WindowData } from '@/lib/core/types';

import { DeleteDialog } from '../windows-table/delete-dialog';
import { EditDialog } from '../windows-table/edit-dialog';
import { NotesDialog } from '../windows-table/notes-dialog';

type Dialog = {
  action: 'notes' | 'edit' | 'delete';
  windowData: WindowData;
};

export const ActionDialogsContext = createContext<(dialog: Dialog | undefined) => void>(() => {});

interface ActionDialogsProviderProps {
  children: React.ReactNode;
  onEdit: (windowData: WindowData) => void;
  onDelete: (id: number) => void;
}
export const ActionDialogsProvider = ({
  children,
  onEdit,
  onDelete,
}: ActionDialogsProviderProps) => {
  const [dialog, setDialog] = useState<Dialog | undefined>(undefined);
  const openChangeHandler = (open: boolean) => {
    if (!open) setDialog(undefined);
  };
  return (
    <ActionDialogsContext.Provider value={setDialog}>
      {dialog?.action === 'notes' && (
        <NotesDialog onOpenChange={openChangeHandler} windowData={dialog.windowData} />
      )}
      {dialog?.action === 'edit' && (
        <EditDialog
          onOpenChange={openChangeHandler}
          windowData={dialog.windowData}
          onEdit={onEdit}
        />
      )}
      {dialog?.action === 'delete' && (
        <DeleteDialog
          onOpenChange={openChangeHandler}
          windowId={dialog.windowData.id}
          onDelete={onDelete}
        />
      )}
      {children}
    </ActionDialogsContext.Provider>
  );
};
