'use client';

import { createContext, PropsWithChildren } from 'react';

interface I18nContextType {
  lng: string;
}

export const I18nContext = createContext<I18nContextType>(
  {} as I18nContextType
);

export const I18nProvider = ({
  lng,
  children,
}: { lng: string } & PropsWithChildren) => {
  return (
    <I18nContext.Provider value={{ lng }}>{children}</I18nContext.Provider>
  );
};
