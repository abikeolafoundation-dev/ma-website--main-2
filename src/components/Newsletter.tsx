import {motion} from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-12 bg-surface-cream rounded-xl shadow-level-1 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-display text-primary mb-4 text-center"
      >
        Stay Updated
      </motion.h2>
      <p className="text-center text-[#414943] mb-6">
        Subscribe to our newsletter for the latest updates on projects and impact.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => { e.preventDefault(); alert('Subscription placeholder'); }}>
        <input
          type="email"
          required
          placeholder="Your email"
          className="flex-1 px-4 py-2 border rounded-soft focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-soft font-body font-semibold hover:bg-primary-container transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}
