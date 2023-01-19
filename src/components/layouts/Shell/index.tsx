import { FunctionComponent, ReactNode } from "react";

import { Box } from "@chakra-ui/react";
import { LayoutGroup } from "framer-motion";

import { useShell } from "@/hooks/useShell";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
export const Shell: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const { BeforeFooterComponent, AfterHeaderComponent } = useShell();

  return (
      <Box
        height="100%"
        width="100%"
        backgroundColor="brand.background"
        display="flex"
        flexDirection="column"
        alignItems="center"
        >
          <Header />
        {AfterHeaderComponent && (
          <LayoutGroup id="after-header">{AfterHeaderComponent}</LayoutGroup>
        )}

        <Box height="100%" width="100%" maxWidth="800px">
          <LayoutGroup id="global">{children}</LayoutGroup>
        </Box>

        {BeforeFooterComponent && (
          <LayoutGroup id="before-footer">{BeforeFooterComponent}</LayoutGroup>
        )}
        <Footer />
      </Box>
  );
};
