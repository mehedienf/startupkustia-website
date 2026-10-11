interface RiverWaveDividerProps {
  /**
   * "bottom": positioned at section bottom, transitioning into next section
   * "top": positioned at section top
   */
  position?: "bottom" | "top";
  /**
   * Text color class controlling the wave fill, e.g. "text-brand-soft", "text-white", "text-dark"
   */
  color?: string;
  /**
   * Optional custom classes
   */
  className?: string;
  /**
   * Flips wave horizontally for alternating natural river meandering
   */
  flip?: boolean;
}

export default function RiverWaveDivider({
  position = "bottom",
  color = "text-white",
  className = "",
  flip = false,
}: RiverWaveDividerProps) {
  const isBottom = position === "bottom";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20 ${
        isBottom ? "bottom-0 translate-y-[1px]" : "top-0 -translate-y-[1px]"
      } ${color} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 md:h-16 lg:h-20 block ${
          !isBottom ? "rotate-180" : ""
        } ${flip ? "-scale-x-100" : ""}`}
      >
        {/* Layer 1: Subtle flowing river contour ripple (25% opacity) */}
        <path
          d="M0,28 C260,8 520,48 780,24 C1040,4 1260,42 1440,20 L1440,70 L0,70 Z"
          fill="currentColor"
          className="opacity-25"
        />
        {/* Layer 2: Main organic river wave curve */}
        <path
          d="M0,38 C320,12 560,54 840,28 C1120,4 1300,48 1440,32 L1440,70 L0,70 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
