import { ReactNode } from "react";
import { BusinessProvider } from "./business";
import { ThemeProvider } from "./theme";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BusinessProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </BusinessProvider>
  );
};
