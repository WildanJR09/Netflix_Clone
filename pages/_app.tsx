import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Authprovider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Authprovider>
        <Component {...pageProps} />;
      </Authprovider>
    </RecoilRoot>
  );
}

export default MyApp;
