"use client";

import { useEffect, useState } from "react";

const rows = [
  { dirty: ["  alice  SMITH ", "adelaide", "$1,200"], clean: ["Alice Smith", "Adelaide", "1200.00"] },
  { dirty: ["BOB lee", "Adelaid", "950 AUD"], clean: ["Bob Lee", "Adelaide", "950.00"] },
  { dirty: ["carla  diaz", "ADELAIDE ", "n/a"], clean: ["Carla Diaz", "Adelaide", "0.00"] },
  { dirty: ["Dev Patel,", "adelaide sa", "1.050,5"], clean: ["Dev Patel", "Adelaide", "1050.50"] },
  { dirty: ["eve  NGUYEN", "adl", "$780"], clean: ["Eve Nguyen", "Adelaide", "780.00"] },
];

const heads = ["name", "city", "amount"];

export default function CleanTable() {
  const [done, setDone] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(() => {
      setDone((d) => {
        if (d >= rows.length) {
          clearInterval(id);
          return d;
        }
        return d + 1;
      });
    }, reduced ? 0 : 650);
    return () => clearInterval(id);
  }, [run]);

  return (
    <figure className="w-full">
      <div
        role="img"
        aria-label="A table of messy customer rows being cleaned one by one: names capitalised, cities fixed, amounts turned into numbers."
        className="overflow-hidden rounded-xl border border-line bg-surface font-mono text-[13px] shadow-sm"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-2 text-muted">
          <span>customers.csv</span>
          <span aria-live="polite">{done >= rows.length ? "all rows clean" : `${done}/${rows.length} cleaned`}</span>
        </div>
        <div className="grid grid-cols-[1.3fr_1fr_0.8fr] px-4 py-2 text-muted">
          {heads.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
        {rows.map((r, i) => {
          const ok = i < done;
          const cells = ok ? r.clean : r.dirty;
          return (
            <div
              key={i}
              className={`grid grid-cols-[1.3fr_1fr_0.8fr] border-t border-line px-4 py-3 transition-colors duration-500 ${
                ok ? "bg-clean/10 text-foreground" : "text-dirty"
              }`}
            >
              {cells.map((c, j) => (
                <span key={j} className="truncate whitespace-pre">
                  {c}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-muted">
        <span>Messy in, clean out. This is the work I like most.</span>
        <button
          type="button"
          onClick={() => {
            setDone(0);
            setRun((n) => n + 1);
          }}
          className="rounded-md border border-line px-3 py-1 font-medium text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          Replay
        </button>
      </figcaption>
    </figure>
  );
}
