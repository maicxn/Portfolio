import { useContext } from 'react';

import { ShellContext, ShellContextData } from '@/contexts/ShellContext';

export const useShell = (): ShellContextData => {
  const context = useContext(ShellContext);
  return context;
};
