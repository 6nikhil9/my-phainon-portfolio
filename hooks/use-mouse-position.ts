// hooks/use-mouse-position.ts
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import type { RefObject } from "react";

export const useMousePosition = (ref: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0.5); // Start at the center
  const mouseY = useMotionValue(0.5); // Start at the center

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      mouseX.set(x);
      mouseY.set(y);
    };

    const currentElement = ref.current;
    // We attach to the element itself to track mouse position relative to it
    if (currentElement) {
        currentElement.addEventListener("mousemove", handleMouseMove);
    } else {
        // Fallback to window if the ref isn't ready, though less ideal
        window.addEventListener("mousemove", handleMouseMove);
    }


    return () => {
        if (currentElement) {
            currentElement.removeEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    };
  }, [ref, mouseX, mouseY]);

  return { mouseX, mouseY };
};