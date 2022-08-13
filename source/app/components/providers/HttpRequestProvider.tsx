import React from 'react';

export type HttpRequestProviderProps = {
  children: React.ReactNode;
};

export const HttpRequestProvider = ({children}: HttpRequestProviderProps) => {
  return <>{children}</>;
};
