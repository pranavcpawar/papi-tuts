/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationButton } from "@/components/account/navigation-button";
import { dotWallets } from "@/components/account/wallets";
import { Button } from "@/components/ui/button";
import type { ViewNavigationProps } from "@/components/ui/multi-view-dialog";
import {
  useAccounts,
  useConnectedWallets,
  useWalletConnector,
  useWalletDisconnector,
  useWallets,
} from "@reactive-dot/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function ViewSelectWallet({ next }: ViewNavigationProps) {
  const wallets = useWallets();
  const accounts = useAccounts();

  const connectedWallets = useConnectedWallets();

  const [_, connect] = useWalletConnector();
  const [__, disconnect] = useWalletDisconnector();

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex max-h-[45vh] flex-col gap-2 overflow-y-auto pr-2 sm:max-h-[70vh] font-outfit">
        {wallets.map((wallet, index) => {
          console.log(wallet);
          const walletMetadata = dotWallets.find((w) => w.id === wallet.name);
          const isConnected = connectedWallets.some(
            (w) => w.name === wallet.name,
          );
          const walletAccounts = accounts.filter((account) => {
            return account.wallet === wallet;
          });
          const count = walletAccounts.length;
          return (
            <Button
              className="bg-background/10 border-border flex h-16 w-full cursor-pointer items-center justify-between gap-2 rounded-[0.7rem] border-2 p-4 hover:bg-[#252525]/50"
              key={`wallet-${index.toFixed(0)}`}
              onClick={() => {
                if (wallet) {
                  if (isConnected) {
                    void disconnect(wallet);
                  } else {
                    void connect(wallet);
                  }
                } else {
                  window.open(walletMetadata?.urls.website, "_blank");
                }
              }}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <div className="flex items-center justify-center gap-2">
                  {isConnected ? (
                    <div className="h-1 w-1 rounded-full bg-green-500" />
                  ) : (
                    <div className="bg-info h-1 w-1 rounded-full" />
                  )}
                  {count > 0 ? (
                    <span className="font-poppins w-2 text-xs font-semibold tracking-tight text-green-500">
                      {count}
                    </span>
                  ) : (
                    <span className="text-info font-poppins w-2 text-xs font-semibold tracking-tight">
                      0
                    </span>
                  )}

                  <img
                    src={walletMetadata?.logoUrls[0] ?? ""}
                    alt={wallet.name}
                    width={24}
                    height={24}
                    sizes="24px"
                    className="h-6 w-6"
                  />
                  <span className="text-foreground font-manrope text-base font-semibold tracking-tight">
                    {wallet.name}
                  </span>
                </div>
                <div className="text-info text-xs font-medium tracking-tight">
                  {!wallet ? (
                    <span className="font-manrope text-secondary bg-secondary/10 rounded-sm px-10 py-1 text-xs font-medium tracking-tight">
                      Install
                    </span>
                  ) : isConnected ? (
                    <span className="font-manrope text-tertiary bg-tertiary/10 rounded-sm px-6 py-1 text-xs font-medium tracking-tight">
                      Disconnect
                    </span>
                  ) : (
                    <span className="font-manrope text-primary bg-primary/10 rounded-sm px-8 py-1 text-xs font-medium tracking-tight">
                      Connect
                    </span>
                  )}
                </div>
              </div>
            </Button>
          );
        })}
      </div>
      <NavigationButton
        Icon={MdOutlineKeyboardDoubleArrowRight}
        text="Manage accounts"
        onClick={next}
        disabled={!wallets.length}
      />
    </div>
  );
}
