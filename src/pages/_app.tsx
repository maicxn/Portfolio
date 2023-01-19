import { Shell } from "@/components/layouts/Shell";
import { ShellProvider } from "@/providers/ShellProvider";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ShellProvider>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </ShellProvider>
    </ChakraProvider>
  );
}
