import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function TabTransition() {
  const categories = [
    {
      name: "Performance",
      meta: [
        {
          id: 1,
          title: "Opened",
          metric: "15.1%",
          color: "white",
        },
        {
          id: 2,
          title: "Clicked",
          metric: "8.9%",
          color: "blue",
        },
        {
          id: 3,
          title: "Converted",
          metric: "3.7%",
          color: "green",
        },
      ],
    },
    {
      name: "Delivery",
      meta: [
        {
          id: 1,
          title: "Delivered",
          metric: "97.7%",
          color: "green",
        },
        {
          id: 2,
          title: "Failed",
          metric: "1.5%",
          color: "red",
        },
        {
          id: 3,
          title: "Undeliverable",
          metric: "0.8%",
          color: "gray",
        },
      ],
    },
    {
      name: "Most successful",
      meta: [
        {
          id: 1,
          title: "Welcome email",
          metric: "19.1% opened",
          color: "white",
        },
        {
          id: 2,
          title: "You've unlocked 20% off",
          metric: "16.3% opened",
          color: "white",
        },
        {
          id: 3,
          title: "Top 3 guitar pedals of 2024",
          metric: "14.5% opened",
          color: "white",
        },
      ],
    },
  ];

  return (
    <TabGroup className="w-full max-w-sm flex-shrink-0 rounded-md bg-neutral-800 p-4 shadow-border-shadow">
      <TabList className="flex">
        {categories.map(({ name }) => (
          <Tab
            key={name}
            className="text rounded-t-md px-4 py-2 text-sm text-neutral-400 focus:outline-none data-[hover]:bg-white/5 data-[selected]:bg-neutral-700 data-[selected]:data-[hover]:bg-white/10 data-[selected]:text-white data-[focus]:outline-1 data-[focus]:outline-white"
          >
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {categories.map(({ name, meta }) => (
          <TabPanel
            key={name}
            className="flex rounded-md rounded-t-none bg-neutral-700 p-3"
          >
            <motion.div
              className="flex w-full flex-col"
              exit={{
                opacity: 0,
                filter: "blur(5px)",
                transition: { ease: "easeIn", duration: 0.22 },
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: { type: "spring", duration: 1 },
              }}
            >
              {meta.map(({ id, metric, title, color }) => (
                <div key={id} className="rounded-md p-3 text-sm/6">
                  <div
                    className="flex items-center justify-between gap-4"
                    aria-hidden="true"
                  >
                    <span className="truncate text-sm text-neutral-300">
                      {title}
                    </span>
                    <span className="flex-shrink-0 text-sm text-white">
                      {metric}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
