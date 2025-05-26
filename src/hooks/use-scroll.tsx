import { useRef } from "react";

export const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const elementWidth =
      containerRef.current?.firstElementChild?.clientWidth || 0;
    const currentScroll = containerRef.current?.scrollLeft || 0;

    containerRef?.current?.scrollTo({
      left: currentScroll + elementWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const elementWidth =
      containerRef.current?.firstElementChild?.clientWidth || 0;
    const currentScroll = containerRef.current?.scrollLeft || 0;

    containerRef?.current?.scrollTo({
      left: currentScroll - elementWidth,
      behavior: "smooth",
    });
  };

  return {
    containerRef,
    handleNext,
    handlePrev,
  };
};
