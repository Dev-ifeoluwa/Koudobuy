// Make sure the Navbar component exists at this path or update the path if necessary
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlashSales from "@/components/FlashSales";
import TopSellers from "@/components/TopSellers";
import LimitedStockDeals from "@/components/LimitedStock";
import BestPhone from "@/components/BestPhone";
import SellingItem from "@/components/SellingItem";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50 font-sans">
			{/* Navbar at the top */}
			<Navbar />
			{/* Hero section */}
			<Hero />
			{/* Main content sections */}
			<main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
				{/* Flash Sales */}
					<FlashSales />
				{/* Top Sellers */}
					<TopSellers />

				{/* Limited Stock Deals */}
				<LimitedStockDeals />

				{/* Best Phone Deals */}
				<BestPhone />

				{/* Top Selling Items */}
				<SellingItem />

				{/* Appliances Upgrade Deals */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-yellow-600">Appliances Upgrade Deals</h2>
					{/* Appliances Upgrade Deals content will go here */}
				</section>

				{/* Beauty Deals */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-pink-600">Beauty Deals</h2>
					{/* Beauty Deals content will go here */}
				</section>
			</main>
		</div>
	);
}
