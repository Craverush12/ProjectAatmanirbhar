"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = ImageProps & {
  className?: string;
};

export default function ShimmerImage({ className, alt, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const sizes = rest.sizes || (rest.fill ? "(max-width: 768px) 100vw, 60vw" : undefined);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[var(--brand-slate)]/20 via-[var(--brand-leaf)]/10 to-transparent" />
      )}
      <motion.div animate={loaded ? { scale: 1 } : { scale: 1.01 }} transition={{ duration: 0.6 }}>
        <Image {...rest} sizes={sizes} alt={alt} onLoadingComplete={() => setLoaded(true)} />
      </motion.div>
    </div>
  );
}
