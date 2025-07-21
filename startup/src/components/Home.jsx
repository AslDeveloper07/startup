import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FiSearch, FiHome, FiFileText, FiUser } from "react-icons/fi";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import NavItem from "./NavItem";
import MapView from "./MapView";

const Home = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Elektrik montaj",
      description: "Uy va ofis elektr tarmog'ini o'rnatish",
      status: "active",
      rating: 4,
      location: { lat: 41.311081, lng: 69.240562 },
      img: "https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp",
    },
    {
      id: 2,
      title: "Nosozliklarni bartaraf etish",
      description: "Elektr tarmog'idagi nosozliklarni tezda bartaraf qilish",
      status: "busy",
      rating: 5,
      location: { lat: 41.315, lng: 69.245 },
      img: "https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp",
    },
    {
      id: 3,
      title: "Chiroqlarni almashtirish",
      description: "Barcha turdagi chiroqlarni professional almashtirish",
      status: "available",
      rating: 4,
      location: { lat: 41.312, lng: 69.238 },
      img: "https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp",
    },
    {
      id: 4,
      title: "Energetik maslahat",
      description: "Energetika xarajatlarini kamaytirish bo'yicha maslahat",
      status: "inactive",
      rating: 3,
      location: { lat: 41.309, lng: 69.242 },
      img: "https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp",
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm p-4">
        <div className="flex items-center relative">
          <FiSearch className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link to="/map" className="ml-2">
            <button className="p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors">
              <RiMapPinLine size={20} />
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="space-y-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => setSelectedService(service)}
              isSelected={selectedService?.id === service.id}
            />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-3 max-w-md mx-auto">
        <NavItem icon={<FiHome size={24} />} label="Asosiy" active />
        <NavItem icon={<FiFileText size={24} />} label="Buyurtmalar" />
        <Link to="/profile" className="flex flex-col items-center">
          <NavItem icon={<FiUser size={24} />} label="Profil" />
        </Link>
      </nav>
    </div>
  );
};

export default Home;