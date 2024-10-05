import { Option } from "@/types/ui";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  options: Option[];
  selectedOption: Option;
  onChangeOption: (option: Option) => void;
};

export default function Select({
  options,
  selectedOption,
  onChangeOption,
}: Props) {
  return (
    <Listbox value={selectedOption} onChange={onChangeOption}>
      {({ open }) => (
        <>
          <ListboxButton
            className={clsx(
              "relative block w-full rounded-lg bg-white/5 py-1.5 pl-3 pr-8 text-left text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            )}
          >
            {selectedOption.label}
            <ChevronDownIcon
              className="group pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 text-white/60"
              aria-hidden="true"
            />
          </ListboxButton>
          <AnimatePresence>
            {open && (
              <ListboxOptions
                static
                as={motion.ul}
                anchor="bottom"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 h-40 w-[var(--button-width)] rounded-xl border border-neutral-900 bg-neutral-800 focus:outline-none"
              >
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option}
                    className="group flex h-10 cursor-default select-none gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
                  >
                    <CheckIcon className="size-4 invisible fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-white">{option.label}</div>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  );
}
