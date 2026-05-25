"use client";

import { useEffect, useState } from "react";

const R = "#B83A26"; // brand red
const C = "#FBE9D2"; // cream
const D = "#5B1E14"; // dark red (pupils)

const P = 12; // pixel size in viewBox units
const COLS = 12;
const ROWS = 14;
const W = COLS * P;
const H = ROWS * P;

const COLOR: Record<string, string> = { R, C, D };

// 10-row head sprite shared by both frames
const HEAD = [
  "....RRRR....",
  "..RRRRRRRR..",
  ".RRRRRRRRRR.",
  "RRRRRRRRRRRR",
  "RRRCCRRCCRRR", // eye whites
  "RRRDCRRDCRRR", // pupils
  "RRRRRRRRRRRR",
  "RRRRRCCRRRRR", // mouth
  "RRRRRRRRRRRR",
  ".RRRRRRRRRR.",
];

// Frame A — standing tall: head sits at top, 4 long legs hang straight down
const FRAME_A = {
  headY: 0,
  legs: [
    [1, 10], [1, 11], [1, 12], [1, 13],
    [4, 10], [4, 11], [4, 12], [4, 13],
    [7, 10], [7, 11], [7, 12], [7, 13],
    [10, 10], [10, 11], [10, 12], [10, 13],
  ] as [number, number][],
};

// Frame B — squatting: body drops 2 rows, legs splay out short & wide
const FRAME_B = {
  headY: 2,
  legs: [
    [0, 12], [1, 12], [0, 13],
    [3, 12], [4, 12], [3, 13],
    [7, 12], [8, 12], [8, 13],
    [10, 12], [11, 12], [11, 13],
  ] as [number, number][],
};

const FRAMES = [FRAME_A, FRAME_B];
const FRAME_DURATION_MS = 680;

export default function PixelOctopus({
  className = "",
}: {
  className?: string;
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setFrame((f) => (f + 1) % FRAMES.length),
      FRAME_DURATION_MS
    );
    return () => clearInterval(id);
  }, []);

  const { headY, legs } = FRAMES[frame];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {HEAD.flatMap((row, y) =>
        [...row].map((ch, x) => {
          const fill = COLOR[ch];
          if (!fill) return null;
          return (
            <rect
              key={`h-${y}-${x}`}
              x={x * P}
              y={(y + headY) * P}
              width={P}
              height={P}
              fill={fill}
            />
          );
        })
      )}
      {legs.map(([x, y], i) => (
        <rect
          key={`l-${i}`}
          x={x * P}
          y={y * P}
          width={P}
          height={P}
          fill={R}
        />
      ))}
    </svg>
  );
}
