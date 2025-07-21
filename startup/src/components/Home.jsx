import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FiSearch,
  FiHome,
  FiFileText,
  FiUser,
  FiMapPin,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";
import { FaStar, FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [services] = useState([
    {
      id: 1,
      title: "Elektrik montaj",
      description: "Uy va ofis elektr tarmog'ini o'rnatish",
      status: "active",
      rating: 4,
      reviews: 12,
      distance: "1.2 km",
      price: "300 000 so'm",
      img: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Elektr liniyalarini o'rnatish",
        "Rozetka va vintlarni montaj qilish",
        "Shchitokni ulash",
        "Yoritish tizimlari",
      ],
      address: "Toshkent sh., Yunusobod tumani, Navoiy ko'chasi 45",
      phone: "+998901234567",
      experience: "5 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Akmal Jo'rayev",
          rating: 5,
          comment: "Ajoyib ish qildi, juda mamnunman!",
          date: "12.03.2023",
        },
        {
          id: 2,
          user: "Dilfuza Xasanova",
          rating: 4,
          comment: "Vaqtida kelib, tez ishladi. Tavsiya etaman.",
          date: "28.02.2023",
        },
      ],
    },
    // ... other services
  ]);

  const handleServiceSelect = (service) => {
    navigate(`/detail/${service.id}`, { state: { service } });
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm px-4 pt-2 pb-2">
        <div className="flex items-center relative">
          <FiSearch className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Qidirish..."
            className="w-full py-[10px] pl-10 pr-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
          />
          <Link to="/map" className="ml-2">
            <button className="p-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-xl shadow-md hover:from-orange-600 hover:to-orange-500 transition-all">
              <FiMapPin size={20} />
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-18">
        <div className="space-y-3 mt-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => handleServiceSelect(service)}
            />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center p-0 max-w-md mx-auto shadow-lg">
        <NavItem icon={<FiHome size={24} />} label="Asosiy" active />
        <NavItem icon={<FiFileText size={24} />} label="Buyurtmalar" />
        <Link to="/profile" className="flex flex-col items-center">
          <NavItem icon={<FiUser size={24} />} label="Profil" />
        </Link>
      </nav>
    </div>
  );
};

// ServiceCard component
const ServiceCard = ({ service, onSelect }) => {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    busy: "bg-yellow-100 text-yellow-800",
    available: "bg-blue-100 text-blue-800",
    inactive: "bg-gray-100 text-gray-800",
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex p-3">
        <img
          src={service.img}
          alt={service.title}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div className="ml-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-800 line-clamp-1">
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

            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {service.description}
            </p>
          </div>

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < service.rating ? "fill-current" : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  {service.rating}.0 ({service.reviews})
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-orange-500 text-lg">
                {service.price}
              </span>
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-3 py-1 rounded-lg text-sm font-medium transition-all shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect();
                }}
              >
                Buyurtma
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// DetailistPage component
const DetailistPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state?.service;

  if (!service) {
    return (
      <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 items-center justify-center">
        <p className="text-gray-500">Ma'lumot topilmadi</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Orqaga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white shadow-sm px-4 py-3 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-orange-500 hover:text-orange-700 mr-2"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Usta haqida</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-24">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
          <div className="p-4 flex items-start">
            <img
              src={service.img}
              alt={service.title}
              className="w-20 h-20 object-cover rounded-lg border-2 border-orange-100"
            />

            <div className="ml-4 flex-1">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-gray-800">
                  {service.title}
                </h2>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    service.status === "active"
                      ? "bg-green-100 text-green-800"
                      : service.status === "busy"
                      ? "bg-yellow-100 text-yellow-800"
                      : service.status === "available"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  } font-medium`}
                >
                  {service.status === "active" && "Faol"}
                  {service.status === "busy" && "Band"}
                  {service.status === "available" && "Mavjud"}
                  {service.status === "inactive" && "Nofaol"}
                </span>
              </div>

              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={14}
                      className={
                        i < service.rating ? "fill-current" : "text-gray-200"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {service.rating}.0 ({service.reviews} sharhlar)
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>

              <div className="mt-3 flex items-center text-sm text-gray-500">
                <FiMapPin className="mr-2 text-orange-500" />
                <span>{service.address}</span>
              </div>

              <div className="mt-2 flex items-center text-sm text-gray-500">
                <FiCalendar className="mr-2 text-orange-500" />
                <span>{service.experience}</span>
              </div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="px-4 pb-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:${service.phone}`}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              <FiPhone className="mr-2" />
              Qo'ng'iroq
            </a>
            <a
              href={`https://wa.me/${service.phone}`}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-4">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">Qiladigan ishlar</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {service.works.map((work, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span className="text-gray-700">{work}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-4 mb-4">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">Foydalanuvchi sharhlari</h3>
          </div>
          <div className="p-4">
            {service.reviewsList.length > 0 ? (
              <div className="space-y-4">
                {service.reviewsList.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-gray-800">
                        {review.user}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={12}
                          className={
                            i < review.rating ? "fill-current" : "text-gray-200"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">
                Hozircha sharhlar mavjud emas
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Order Button */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Narxi:</p>
            <p className="font-bold text-orange-500 text-lg">{service.price}</p>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-2 px-6 rounded-lg font-medium transition-all shadow-md">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
};

// NavItem component
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
    </div>
  );
};

export { Home, DetailistPage };