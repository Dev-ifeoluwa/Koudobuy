// Make sure the Navbar component exists at this path or update the path if necessary
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

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
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-orange-600">Flash Sales</h2>
					{/* Flash Sales content will go here */}
				</section>

				{/* Top Sellers */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-blue-600">Top Sellers</h2>
					{/* Top Sellers content will go here */}
				</section>

				{/* Limited Stock Deals */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-red-600">Limited Stock Deals</h2>
					{/* Limited Stock Deals content will go here */}
				</section>

				{/* Best Phone Deals */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-green-600">Best Phone Deals</h2>
					{/* Best Phone Deals content will go here */}
				</section>

				{/* Top Selling Items */}
				<section className="bg-white rounded-lg shadow p-6">
					<h2 className="text-2xl font-bold mb-4 text-purple-600">Top Selling Items</h2>
					{/* Top Selling Items content will go here */}
				</section>

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
