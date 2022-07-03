import { useRouter } from "next/router";
import { IconClose, IconMenu } from "icons";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useResizeObserver from "use-resize-observer";
import { motion, useAnimation } from "framer-motion";
import { Logo } from "components";
import { routes } from "lib";

export default function Navbar() {
  const router = useRouter();
  const handleNavigateToRoute = (path: "home" | "contact") => {
    setIsOpen(false);
    router.push(routes[path]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { ref, width = 1200 } = useResizeObserver<HTMLDivElement>();
  useEffect(() => {
    if (width > 640) {
      setIsOpen(false);
    }
  }, [width]);

  const controls = useAnimation();
  useEffect(() => {
    if (width > 640) return;

    if (!!isOpen) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.3 },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        transition: { delay: 0 },
      }));
    }
  }, [controls, isOpen, width]);

  return (
    <header
      ref={ref}
      className="mx-auto max-w-4xl w-full sm:flex sm:justify-between"
    >
      <div className="px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <Logo></Logo>
        <div className="sm:hidden">
          <button onClick={handleToggleNavbar}>
            {isOpen ? <IconClose></IconClose> : <IconMenu></IconMenu>}
          </button>
        </div>
      </div>
      <nav
        className={clsx(
          "py-6 px-4 absolute top-32 sm:top-0 bottom-0 left-0 right-0 sm:relative sm:flex flex-col sm:flex-row gap-3 z-50 bg-gray-1200",
          {
            block: isOpen,
            hidden: !isOpen,
          }
        )}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <motion.button
            custom={0}
            initial={{ opacity: width < 640 ? 0 : 1 }}
            animate={controls}
            type="button"
            onClick={() => handleNavigateToRoute("home")}
            className="py-1 px-2 flex items-center gap-2 hover:bg-purple-300/30 rounded-lg"
          >
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            <span className="text-4xl sm:text-base font-bold text-purple-200">
              Home
            </span>
          </motion.button>
          {/* <motion.button
            custom={1}
            initial={{ opacity: width < 640 ? 0 : 1 }}
            animate={controls}
            type="button"
            href="#"
            className="py-1 px-2 flex items-center gap-2 hover:bg-red-300/30 rounded-lg"
          >
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <span className="text-4xl sm:text-base font-bold text-red-200">
              Projects
            </span>
          </motion.button>
          <motion.button
            custom={2}
            initial={{ opacity: width < 640 ? 0 : 1 }}
            animate={controls}
            type="button"
            href="#"
            className="py-1 px-2 flex items-center gap-2 hover:bg-orange-300/30 rounded-lg"
          >
            <div className="w-3 h-3 rounded-full bg-orange-600"></div>
            <span className="text-4xl sm:text-base font-bold text-orange-200">
              My story
            </span>
          </motion.button> */}
          <motion.button
            custom={3}
            initial={{ opacity: width < 640 ? 0 : 1 }}
            animate={controls}
            type="button"
            onClick={() => handleNavigateToRoute("contact")}
            className="py-1 px-2 flex items-center gap-2 hover:bg-green-300/30 rounded-lg"
          >
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span className="text-4xl sm:text-base font-bold text-green-200">
              Contact
            </span>
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
