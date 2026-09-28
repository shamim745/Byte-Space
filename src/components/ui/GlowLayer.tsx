import type { Glow } from "@/types/home";

type GlowLayerProps = {
  glows: Glow[];
};

const GlowLayer = ({ glows }: GlowLayerProps) => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    {glows.map((glow, index) => (
      <span
        key={index}
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px]"
        style={{
          width: glow.size,
          height: glow.size,
          left: glow.left,
          top: glow.top,
          background: glow.background,
        }}
      />
    ))}
  </div>
);

export default GlowLayer;
