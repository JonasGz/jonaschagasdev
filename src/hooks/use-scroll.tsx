import { useRef } from "react";

type UseScrollProps = {
  itemsPerView: number;
  gap?: number;
};

export const useScroll = (props: UseScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const elementWidth =
      containerRef.current?.firstElementChild?.clientWidth || 0;
    const currentScroll = containerRef.current?.scrollLeft || 0;
    const scrollWidth = containerRef.current?.scrollWidth || 0;

    if (props.itemsPerView <= 1) {
      containerRef?.current?.scrollTo({
        left:
          currentScroll + elementWidth >= scrollWidth
            ? 0
            : currentScroll + elementWidth,
        behavior: "smooth",
      });

      return;
    }

    if (props.gap) {
      containerRef?.current?.scrollTo({
        left:
          currentScroll + (elementWidth + props.gap) * props.itemsPerView >=
          scrollWidth
            ? 0
            : currentScroll + elementWidth + props.gap,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const elementWidth =
      containerRef.current?.firstElementChild?.clientWidth || 0;
    const currentScroll = containerRef.current?.scrollLeft || 0;

    if (props.itemsPerView <= 1) {
      containerRef?.current?.scrollTo({
        left: currentScroll - elementWidth,
        behavior: "smooth",
      });

      return;
    }

    if (props.gap) {
      containerRef?.current?.scrollTo({
        left: currentScroll - elementWidth - props.gap,
        behavior: "smooth",
      });
    }
  };

  return {
    containerRef,
    handleNext,
    handlePrev,
  };
};
