import { type ChainId } from "@reactive-dot/core";
import { useLazyLoadQuery } from "@reactive-dot/react";

export default function AccountInfo({ chainId }: {
  chainId: ChainId
}) {
  const [timestamp, blockNumber] = useLazyLoadQuery((builder) =>
    builder
      .readStorage("Timestamp", "Now", [])
      .readStorage("System", "Number", [])
  );
  return (
    <div className="flex flex-col">
      <p className="text-xl">connected to chain: {chainId}</p>
      <p className="text-xl">timestamp: {timestamp.toString()}</p>
      <p className="text-xl">block number: {blockNumber.toString()}</p>
    </div>
  );
}
