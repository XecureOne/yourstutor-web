import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
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
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 40 },
      }}
    >
      {children}
    </motion.div>
  );
};