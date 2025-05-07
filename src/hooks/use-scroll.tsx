import { useRef } from "react";

export const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const elementWidth = containerRef.current?.firstElementChild?.clientWidth;
    containerRef?.current?.scrollTo({
      left: elementWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const elementWidth = containerRef.current?.firstElementChild?.clientWidth;
    containerRef?.current?.scrollTo({
      left: -(elementWidth ?? 0),
      behavior: "smooth",
    });
  };

  return {
    containerRef,
    handleNext,
    handlePrev,
  };
};
