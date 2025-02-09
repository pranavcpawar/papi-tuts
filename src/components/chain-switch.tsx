import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useChainIds } from "@reactive-dot/react";
import { type ChainId } from "@reactive-dot/core";

export default function ChainSwitch(props: {
  setChainId: (chainId: ChainId) => void;
  chainId: ChainId;
}) {
  const chainIds = useChainIds();

  return (
    <Menu as="div" className="relative inline-block text-left w-[180px]">
      <div>
        <MenuButton
          className="
          inline-flex w-full justify-center
          gap-x-1.5
          bg-[#181818]
          px-4.5 py-2
          rounded-[12px]

          text-sm font-semibold text-white
          shadow-sm
          border border-[#252525]
          hover:bg-black/50"
        >
          {props.chainId}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="
        absolute right-0 z-10
        mt-2 w-56
        origin-top-right
        rounded-lg
        bg-[#131313]
        shadow-lg
        p-2
        border border-[#252525]
        transition focus:outline-none
        data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
        data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {...chainIds.map((chainId) => (
            <MenuItem>
              <button
                className="
                block w-full
                px-4 py-2
                text-center text-sm text-white
                bg-inherit
                rounded-[12px]
                border border-[#252525]
                data-[focus]:bg-[#202020] data-[focus]:text-white data-[focus]:outline-none"
                onClick={() => {
                  props.setChainId(chainId);
                }}
              >
                {chainId}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
