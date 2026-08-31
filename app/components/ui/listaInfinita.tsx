"use client";

import { useEffect, useRef } from "react";

interface ListaInfinitaProps {
  items: string[];

  direction?: "horizontal" | "vertical";

  speed?: number;

  reverse?: boolean;

  gap?: number;

  visibleItems?: number;

  itemHeight?: number;

  className?: string;
}

export default function ListaInfinita({
  items,
  direction = "horizontal",
  speed = 50,
  reverse = false,
  gap = 32,
  visibleItems = 3,
  itemHeight = 40,
  className = "",
}: ListaInfinitaProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const isVertical = direction === "vertical";

  const repeatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;

    if (!track || items.length === 0) return;

    let animationFrame: number;
    let position = 0;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      const movement = (speed * delta) / 1000;

      position += reverse ? movement : -movement;

      let sequenceSize = 0;

      const children = Array.from(track.children) as HTMLElement[];

      for (let i = 0; i < items.length; i++) {
        const element = children[i];

        if (!element) continue;

        if (isVertical) {
          sequenceSize += element.offsetHeight;

          if (i < items.length - 1) {
            sequenceSize += gap;
          }
        } else {
          sequenceSize += element.offsetWidth;

          if (i < items.length - 1) {
            sequenceSize += gap;
          }
        }
      }

      if (!reverse && Math.abs(position) >= sequenceSize) {
        position += sequenceSize;
      }

      if (reverse && position >= 0) {
        position -= sequenceSize;
      }

      if (isVertical) {
        track.style.transform = `translate3d(0, ${position}px, 0)`;
      } else {
        track.style.transform = `translate3d(${position}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [items, speed, reverse, gap, isVertical]);

  if (items.length === 0) {
    return null;
  }

  const verticalHeight =
    visibleItems * itemHeight + Math.max(0, visibleItems - 1) * gap;

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        width: "100%",

        ...(isVertical
          ? {
              height: `${verticalHeight}px`,
            }
          : {}),
      }}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{
          flexDirection: isVertical ? "column" : "row",

          gap: `${gap}px`,

          width: "max-content",

          ...(isVertical
            ? {
                height: "max-content",
              }
            : {}),
        }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="shrink-0"
            style={
              isVertical
                ? {
                    height: `${itemHeight}px`,
                  }
                : undefined
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
