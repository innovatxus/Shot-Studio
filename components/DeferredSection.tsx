/**
 * Skips layout, style and paint work for a section while it is far off screen.
 *
 * The home page stacks fourteen sections holding well over a hundred cards.
 * Without containment the browser restyles and re-lays-out all of them on
 * every resize, font swap and reveal-class toggle, which is what turns a
 * scroll into a stutter on mid-range hardware. `content-visibility: auto`
 * lets the browser skip everything below the fold until it is nearly needed.
 *
 * `contain-intrinsic-size: auto <estimate>` is what keeps the scrollbar
 * honest: `auto` makes the browser remember each section's real rendered
 * height after the first pass, and the estimate only stands in before that.
 *
 * Server component — this costs zero client JS, and browsers without
 * `content-visibility` simply render as they always did.
 */
export default function DeferredSection({
  children,
  /** Rough rendered height, used only until the browser has measured once. */
  estimatedHeight = 1200,
}: {
  children: React.ReactNode;
  estimatedHeight?: number;
}) {
  return (
    <div
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: `auto ${estimatedHeight}px`,
      }}
    >
      {children}
    </div>
  );
}
