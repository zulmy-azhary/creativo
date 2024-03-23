import { type HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type ImageProps = HTMLMotionProps<"img"> & {
  delay?: number;
};

export const Image: React.FC<ImageProps> = (props) => {
  const { delay = 0.25, ...rest } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.img
      ref={ref}
      variants={imageVariants}
      initial={"hidden"}
      animate={controls}
      transition={{ duration: 0.5, delay }}
      {...rest}
    />
  );
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
