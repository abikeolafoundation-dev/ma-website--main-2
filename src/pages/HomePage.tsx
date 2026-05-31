import Hero from '../components/Hero';
import Impact from '../components/Impact';
import EndowmentModel from '../components/EndowmentModel';
import DonationTiers from '../components/DonationTiers';
import BeneficiaryStory from '../components/BeneficiaryStory';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Impact />
      <EndowmentModel />
      <DonationTiers />
      <BeneficiaryStory />
      <Newsletter />
    </main>
  );
}
