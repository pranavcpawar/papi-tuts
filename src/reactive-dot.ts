import { dot } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { registerDotConnect } from "dot-connect";
import { getSmProvider } from "polkadot-api/sm-provider";
import { polkadotChain } from "./smoldot";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { LedgerWallet } from "@reactive-dot/wallet-ledger";

const injectedWallet = new InjectedWalletProvider();
const legderWallet = new LedgerWallet();

export const wallets = [injectedWallet, legderWallet];

export const config = defineConfig({
  chains: {
    polkadot: {
      descriptor: dot,
      provider: getSmProvider(polkadotChain),
    },
  },
  wallets,
});

registerDotConnect({ wallets });
