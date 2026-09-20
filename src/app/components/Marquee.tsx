import { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  duration?: number;
  direction?: "left" | "right";
}

/**
 * Pure-CSS infinite marquee. The track is rendered twice and translated by
 * -50%, which makes the loop seamless without any JS, measurement or
 * per-frame work. Hovering pauses the animation.
 */
export default function Marquee({
  children,
  duration = 55,
  direction = "left",
}: MarqueeProps) {
  return (
    <div className="marquee-track overflow-hidden">
      <div
        className="marquee"
        data-direction={direction}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
