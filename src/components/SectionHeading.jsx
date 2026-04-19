import React from 'react';

/**
 * Netflix Jobs–style section title: optional small caps eyebrow + large white headline.
 */
const SectionHeading = ({ children, eyebrow, className = '' }) => (
  <div className={`mb-10 w-full text-center md:mb-14 ${className}`}>
    {eyebrow && (
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500 md:text-xs">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-[clamp(1.875rem,5vw,3.25rem)] font-bold leading-tight tracking-tight text-white">
      {children}
    </h2>
  </div>
);

export default SectionHeading;
