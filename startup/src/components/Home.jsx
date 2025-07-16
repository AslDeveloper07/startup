import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiSearch, FiHome, FiFileText, FiUser } from "react-icons/fi";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import "./../App.css";
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
      img: 'https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp'
    },
    {
      id: 2,
      title: "Nosozliklarni bartaraf etish",
      description: "Elektr tarmog'idagi nosozliklarni tezda bartaraf qilish",
      status: "busy",
      rating: 5,
      location: { lat: 41.315, lng: 69.245 },
      img: 'https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp'
    },
    {
      id: 3,
      title: "Chiroqlarni almashtirish",
      description: "Barcha turdagi chiroqlarni professional almashtirish",
      status: "available",
      rating: 4,
      location: { lat: 41.312, lng: 69.238 },
      img: 'https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp'
    },
    {
      id: 4,
      title: "Energetik maslahat",
      description: "Energetika xarajatlarini kamaytirish bo'yicha maslahat",
      status: "inactive",
      rating: 3,
      location: { lat: 41.309, lng: 69.242 },
      img: 'https://images.ctfassets.net/48pg1507y9dh/15Qi0G9QHgNa0d7SjTlWWr/74b10b27f87ab7742d02c3fa271e9bea/OPS-products-e-builder-og-1200x628.webp'
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Qidirish..."
              className="search-input"
            />
            <FiSearch className="search-icon" />
            <button className="map-toggle" to="/map">
              <RiMapPinLine size={25} />
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="services-container">
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

      <nav className="bottom-nav">
        <NavItem icon={<FiHome />} label="Asosiy" active />
        <NavItem icon={<FiFileText />} label="Buyurtmalar" />
        <NavItem icon={<FiUser />} label="Profil" />
      </nav>
    </div>
  );
}

export default Home;