import Hero from '../components/Hero';
import Impact from '../components/Impact';
import WaqfModel from '../components/WaqfModel';
import DonationTiers from '../components/DonationTiers';
import BeneficiaryStory from '../components/BeneficiaryStory';
import Newsletter from '../components/Newsletter';
import DonateSection from '../components/DonateSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Impact />
      <WaqfModel />
      <DonationTiers />
      <BeneficiaryStory />
      <DonateSection />
      <Newsletter />
    </main>
  );
}
