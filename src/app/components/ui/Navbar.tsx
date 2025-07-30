export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="text-xl font-bold text-blue-600">SaaSBrand</div>
      <div className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
        <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
