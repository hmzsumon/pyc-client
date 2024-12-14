import AboutSection from '@/components/home/About';
import ChooseSection from '@/components/home/ChooseSection';
import HeroSection from '@/components/home/HeroSection';
import InvestorSection from '@/components/home/InvestorSection';
import PackageSection from '@/components/home/PackageSection';
import PaymentSection from '@/components/home/PaymentSection';
import PlanSection from '@/components/home/PlanSection';
import WorkSection from '@/components/home/WorkSection';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<PackageSection />
			<ChooseSection />
			<WorkSection />
			<PaymentSection />
		</div>
	);
}
