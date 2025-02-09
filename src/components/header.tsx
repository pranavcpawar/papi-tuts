import { type ChainId } from "@reactive-dot/core";
import { ConnectionButton } from "dot-connect/react.js";
import ChainSwitch from "./chain-switch";

export default function Header({
  chainId,
  setChainId,
}: {
  chainId: ChainId;
  setChainId: React.Dispatch<React.SetStateAction<ChainId>>;
}) {
  return (
    <header className="static top-0 z-10 w-full max-w-2xl items-center justify-between rounded-[1rem] border-2 border-[#202020] bg-black">
      <div className="flex h-16 items-center justify-between p-2">
        <img
          src="/polkadot.svg"
          alt="polkadot"
          className="h-10 w-10 hover:animate-spin"
        />
        <h3 className="font-unbounded text-lg tracking-tight text-white sm:text-xl">
          PAPI
        </h3>
        <div className="flex items-center justify-center p-2 gap-2 text-white">
          <ConnectionButton />
          <ChainSwitch setChainId={setChainId} chainId={chainId} />
        </div>
      </div>
    </header>
  );
}
