import MainLayout from "@/layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const router = useRouter();

  const noLayoutPages = ["/Auth", "/signIn", "/forgot-password", "/verifyotp"];
  const shouldShowLayout = !noLayoutPages.includes(router.pathname);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReduxProvider> */}
      {shouldShowLayout ? (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      ) : (
        <Component {...pageProps} />
      )}
      {/* </ReduxProvider> */}
    </QueryClientProvider>
  );
}
