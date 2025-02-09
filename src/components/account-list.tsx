import { useAccounts } from "@reactive-dot/react";
import { getWalletMetadata } from "dot-connect";

export default function AccountList() {
  const accounts = useAccounts();
  return (
    <div>
      <h3>Connected:</h3>
      <ul>
        {accounts.map((account, index) => {
          const meta = getWalletMetadata(account.wallet);
          const name = meta?.name ?? account.wallet.name;
          return (
            <li key={index}>
              <div>
                <p>{account.name}</p>
                <p>{name}</p>
                <p>{account.address}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
