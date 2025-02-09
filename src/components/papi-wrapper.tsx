import { ChainProvider, ReactiveDotProvider } from "@reactive-dot/react";
import { Suspense, useState } from "react";
import App from "./app";
import Loader from "./loader";
import type { ChainId } from "@reactive-dot/core";
import { config } from "../reactive-dot";

export default function PapiWrapper() {
  const [chainId, setChainId] = useState<ChainId>("polkadot");
  return (
    <ReactiveDotProvider config={config}>
      <ChainProvider key={chainId} chainId={chainId}>
        <Suspense fallback={<Loader />}>
          <App chainId={chainId} setChainId={setChainId} />
        </Suspense>
      </ChainProvider>
    </ReactiveDotProvider>
  );
}
