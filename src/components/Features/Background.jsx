import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function Background(props) {
  const ref = useRef(null);
  const [images, setImages] = useState([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center start"],
  });

  useEffect(() => {
    const loadImages = () => {
      const loadedImages = [];
      for (let i = 1; i <= 106; i++) {
        const img = new window.Image();
        img.src = `/images/${i}.webp`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  const render = useCallback(
    (index) => {
      if (images[index - 1]) {
        const ctx = ref.current?.getContext("2d");
        if (ctx) {
          const canvasWidth = ref.current.width;
          const canvasHeight = ref.current.height;
          ctx.drawImage(images[index - 1], 0, 0, canvasWidth, canvasHeight);
        }
      }
    },
    [images]
  );

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 106]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (images.length > 0) {
      render(1);
    }
  }, [images, render]);

  return <canvas width={1920} height={1080} ref={ref} {...props} />;
}

export default Background;
