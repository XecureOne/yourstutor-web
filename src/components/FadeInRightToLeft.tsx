import type { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FadeInRightToLeft = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      style={{ display: "block" }} // ✅ Keeps proper grid flow
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 40 } // smaller offset to avoid big layout shifts
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
