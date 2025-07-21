import { Link } from "react-router-dom";
import { FiSearch, FiHome, FiFileText, FiUser, FiMapPin } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Elektrik montaj",
      description: "Uy va ofis elektr tarmog'ini o'rnatish",
      status: "active",
      rating: 4,
      distance: "1.2 km",
      price: "300 000 so'm",
      img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Nosozliklarni bartaraf etish",
      description: "Elektr tarmog'idagi nosozliklarni tezda bartaraf qilish",
      status: "busy",
      rating: 5,
      distance: "0.8 km",
      price: "250 000 so'm",
      img: "https://images.unsplash.com/photo-1581093450021-4a7360e9aab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Chiroqlarni almashtirish",
      description: "Barcha turdagi chiroqlarni professional almashtirish",
      status: "available",
      rating: 4,
      distance: "2.1 km",
      price: "150 000 so'm",
      img: "https://images.unsplash.com/photo-1580015915217-697d9b407a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpZ2h0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Energetik maslahat",
      description: "Energetika xarajatlarini kamaytirish bo'yicha maslahat",
      status: "inactive",
      rating: 3,
      distance: "3.5 km",
      price: "180 000 so'm",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 font-sans ">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm px-4 pt-2 pb-2">
        {/* <h1 className="text-2xl font-bold text-gray-800 mb-2">Xizmatlar</h1> */}
        <div className="flex items-center relative ">
          <FiSearch className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full py-[10px] pl-10 pr-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 text-gray-700"
          />
          <Link to="/map" className="ml-2">
            <button className="p-3 bg-orange-500 text-white rounded-xl shadow-md hover:bg-orange-600 transition-colors">
              <FiMapPin size={20} />
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-18">
        <div className="space-y-2 mt-2">
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-0 max-w-md mx-auto">
        <NavItem icon={<FiHome size={24} />} label="Asosiy" active />
        <NavItem icon={<FiFileText size={24} />} label="Buyurtmalar" />
        <Link to="/profile" className="flex flex-col items-center">
          <NavItem icon={<FiUser size={24} />} label="Profil" />
        </Link>
      </nav>
    </div>
  );
};

// ServiceCard komponenti
const ServiceCard = ({ service, onSelect, isSelected }) => {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    busy: "bg-yellow-100 text-yellow-800",
    available: "bg-blue-100 text-blue-800",
    inactive: "bg-gray-100 text-gray-800",
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all border border-gray-100 ${
        isSelected ? "ring-1 ring-orange-300" : ""
      }`}
      onClick={onSelect}
    >
      <div className="flex p-1">
        <img
          src={service.img}
          alt={service.title}
          className="w-24 h-26 object-cover rounded-xl"
        />

        <div className="ml-2 flex-1 flex flex-col justify-between p-1">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                {service.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  statusColors[service.status]
                } font-medium`}
              >
                {service.status === "active" && "Faol"}
                {service.status === "busy" && "Band"}
                {service.status === "available" && "Mavjud"}
                {service.status === "inactive" && "Nofaol"}
              </span>
            </div>

            {/* <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {service.description}
            </p> */}
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < service.rating ? "fill-current" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  {service.rating}.0
                </span>
              </div>

              {/* <div className="flex items-center text-gray-500 text-sm">
                <FiMapPin size={14} className="mr-1" />
                <span>{service.distance}</span>
              </div> */}
            </div>

            <div className="flex items-center justify-between mt-0">
              <span className="font-bold text-orange-500">{service.price}</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors">
                Buyurtma
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// NavItem komponenti
const NavItem = ({ icon, label, active = false }) => {
  return (
    <div className="flex flex-col items-center px-3 py-2">
      <div
        className={`p-2 rounded-full ${
          active ? "bg-orange-100 text-orange-500" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      {/* <span
        className={`text-xs mt-1 ${
          active ? "text-orange-500 font-bold" : "text-gray-500"
        }`}
      >
        {label}
      </span> */}
    </div>
  );
};

export default Home;
