import { type ChainId } from "@reactive-dot/core";
import React from "react";
import AccountInfo from "./account-info";
import Header from "./header";

function App({
  chainId,
  setChainId,
}: {
  chainId: ChainId;
  setChainId: React.Dispatch<React.SetStateAction<ChainId>>;
}) {
  return (
    <div className="relative flex w-full min-h-screen flex-col place-items-center space-y-4 p-3">
      <Header chainId={chainId} setChainId={setChainId} />

      <div className="inline text-center">

        <AccountInfo chainId={chainId} />
      </div>
    </div>
  );
}

export default App;
