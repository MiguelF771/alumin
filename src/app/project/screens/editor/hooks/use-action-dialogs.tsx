import { useContext } from 'react';

import { ActionDialogsContext } from '../components/action-dialogs/action-dialogs-provider';

export const useActionDialogs = () => {
  return useContext(ActionDialogsContext);
};
