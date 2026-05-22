// src/components/DonateSection.tsx
import React from 'react';

/**
 * TODO: Replace this dummy placeholder with a real donation flow.
 * Currently this component does NOT process any payments.
 * It deliberately shows a static message and an error alert when the "Donate" button is clicked.
 * Remove the error handling and integrate a payment provider (e.g., Stripe, PayPal) when ready.
 */
export default function DonateSection() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Show a non‑blocking error toast – you can replace with real checkout later.
    alert('Donate functionality is under construction. Please check back later.');
  };

  return (
    <section id="donate" className="bg-primary/5 py-20 px-6 text-center rounded-2xl">
      <h2 className="text-3xl font-display font-bold text-primary mb-4">
        Support Our Mission
      </h2>
      <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
        We are working on a secure donation system. Stay tuned!
      </p>
      <button
        onClick={handleClick}
        className="bg-primary text-white px-8 py-3 rounded-xl font-body font-semibold hover:brightness-110 transition-all"
      >
        Donate (Coming Soon)
      </button>
    </section>
  );
}
