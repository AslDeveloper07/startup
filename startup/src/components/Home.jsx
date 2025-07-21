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
    {
      id: 2,
      title: "Santexnika xizmati",
      description: "Barcha turdagi santexnika ishlari",
      status: "busy",
      rating: 5,
      reviews: 18,
      distance: "0.8 km",
      price: "250 000 so'm",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1bWJlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Quvur almashtirish",
        "Dush kabinalari o'rnatish",
        "Kanalizatsiya tozalash",
        "Suv o'tkazgichlarni ta'mirlash",
      ],
      address: "Toshkent sh., Mirzo Ulug'bek tumani, Amir Temur ko'chasi 78",
      phone: "+998902345678",
      experience: "7 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Shoxrux Baxodirov",
          rating: 5,
          comment: "Judayam sifatli ish qildi, rahmat!",
          date: "15.04.2023",
        },
      ],
    },
    {
      id: 3,
      title: "Konditsioner montaj",
      description: "Barcha turdagi konditsionerlarni o'rnatish",
      status: "available",
      rating: 4,
      reviews: 9,
      distance: "2.1 km",
      price: "450 000 so'm",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Konditsioner o'rnatish",
        "Filtrni tozalash",
        "Gaz to'ldirish",
        "Konditsioner ta'miri",
      ],
      address: "Toshkent sh., Shayxontohur tumani, Navoiy ko'chasi 12",
      phone: "+998903456789",
      experience: "4 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Lola Karimova",
          rating: 4,
          comment: "Tez va sifatli ish uchun rahmat!",
          date: "22.05.2023",
        },
        {
          id: 2,
          user: "Jamshid Ismoilov",
          rating: 5,
          comment: "Mutaxassis juda malakali, ishiga ishonaman",
          date: "10.06.2023",
        },
      ],
    },
    {
      id: 4,
      title: "Qurilish ishlari",
      description: "Kichik va o'rta miqyosdagi qurilish ishlari",
      status: "active",
      rating: 4,
      reviews: 15,
      distance: "3.5 km",
      price: "1 200 000 so'm",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      works: [
        "Xonadon qurish",
        "Ta'mirlash ishlari",
        "G'isht terish",
        "Shift va pollarni qilish",
      ],
      address: "Toshkent sh., Yakkasaroy tumani, Bobur ko'chasi 34",
      phone: "+998904567890",
      experience: "10 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Otabek Nurmatov",
          rating: 5,
          comment: "Uyimni ajoyib qilib qurdilar, juda xursandman!",
          date: "05.01.2023",
        },
      ],
    },
    {
      id: 5,
      title: "Mebel yig'ish",
      description: "Barcha turdagi mebellarni yig'ish va o'rnatish",
      status: "available",
      rating: 3,
      reviews: 7,
      distance: "1.7 km",
      price: "180 000 so'm",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      works: [
        "Divan yig'ish",
        "Yotoq yig'ish",
        "Oshxona mebellari",
        "Shkaf yig'ish",
      ],
      address: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 56",
      phone: "+998905678901",
      experience: "3 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Dilnoza Qodirova",
          rating: 4,
          comment: "Vaqtida kelishdi va tez ishlashdi",
          date: "18.03.2023",
        },
      ],
    },
    {
      id: 6,
      title: "Elektronika ta'miri",
      description: "Uy elektronikasini ta'mir qilish",
      status: "active",
      rating: 4,
      reviews: 11,
      distance: "2.3 km",
      price: "200 000 so'm",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Televizor ta'miri",
        "Konditsioner ta'miri",
        "Muzlatgich ta'miri",
        "Kir yuvish mashinasi ta'miri",
      ],
      address: "Toshkent sh., Sergeli tumani, Yangi Sergeli ko'chasi 23",
      phone: "+998906789012",
      experience: "6 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Farhod Abdullayev",
          rating: 5,
          comment: "Eski televizorimni qayta tiklashdi, juda yaxshi!",
          date: "30.04.2023",
        },
      ],
    },
    {
      id: 7,
      title: "Devorga bo'yoq",
      description: "Uy va ofislarga professional bo'yoq ishlari",
      status: "busy",
      rating: 4,
      reviews: 14,
      distance: "1.5 km",
      price: "350 000 so'm",
      img: "https://images.unsplash.com/photo-1600587439665-47a8ff1a9b3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Devorlarni bo'yash",
        "Shift bo'yash",
        "Dekorativ bo'yoq",
        "Travertin ishlari",
      ],
      address: "Toshkent sh., Yashnobod tumani, Farhod ko'chasi 67",
      phone: "+998907890123",
      experience: "5 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Gulnora Xamidova",
          rating: 4,
          comment: "Uyimni juda chiroyli qilib bo'yashdi",
          date: "12.02.2023",
        },
      ],
    },
    {
      id: 8,
      title: "Issiqxona qurish",
      description: "Turli o'lchamdagi issiqxonalarni qurish",
      status: "available",
      rating: 5,
      reviews: 6,
      distance: "4.2 km",
      price: "2 500 000 so'm",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW5ob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Issiqxona qurish",
        "Polikarbonat ishlari",
        "Suv quvurlarini o'rnatish",
        "Issiqxona ta'miri",
      ],
      address: "Toshkent sh., Qibray tumani, Bog'ishamol ko'chasi 89",
      phone: "+998908901234",
      experience: "8 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Bobur Ergashev",
          rating: 5,
          comment: "Ajoyib issiqxona qurishdi, hammasi sifatli!",
          date: "08.03.2023",
        },
      ],
    },
    {
      id: 9,
      title: "Hammom ta'miri",
      description: "Hammom va dush xonalarini ta'mirlash",
      status: "active",
      rating: 4,
      reviews: 8,
      distance: "2.8 km",
      price: "800 000 so'm",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      works: [
        "Kafel ishlari",
        "Gidroizolyatsiya",
        "Suv o'tkazgichlarni o'rnatish",
        "Dush kabinalari o'rnatish",
      ],
      address: "Toshkent sh., Bektemir tumani, Mustaqillik ko'chasi 45",
      phone: "+998909012345",
      experience: "6 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Shahnoza Mirzayeva",
          rating: 5,
          comment: "Hammomim yangi qurilgandek bo'lib qoldi!",
          date: "25.05.2023",
        },
      ],
    },
    {
      id: 10,
      title: "Deraza o'rnatish",
      description: "Plastik va yog'och derazalarni o'rnatish",
      status: "inactive",
      rating: 3,
      reviews: 5,
      distance: "3.1 km",
      price: "600 000 so'm",
      img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      works: [
        "Plastik deraza o'rnatish",
        "Yog'och deraza o'rnatish",
        "Deraza ta'miri",
        "Shisha almashtirish",
      ],
      address: "Toshkent sh., Uchtepa tumani, O'zbekiston ko'chasi 78",
      phone: "+998900123456",
      experience: "4 yillik tajriba",
      reviewsList: [
        {
          id: 1,
          user: "Rustam Qodirov",
          rating: 4,
          comment: "Derazalarimni ajoyib o'rnatishdi, shovqin kamaydi",
          date: "14.04.2023",
        },
      ],
    },
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
      className="bg-white rounded-xl border overflow-hidden border border-gray-100  transition-all cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex p-2">
        <img
          src={service.img}
          alt={service.title}
          className="w-24 h-27 object-cover rounded-lg"
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

            <p className="text-gray-600 text-sm mt-1 line-clamp-1 ">
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
      <main className="flex-1  overflow-y-auto px-4 pb-20">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-4 ">
          <div className="p-0 flex items-start flex-col">
            <img
              src={service.img}
              alt={service.title}
              className="w-[400px] h-fit object-cover rounded-lg border-2 border-orange-100"
            />

            <div className="p-4 flex-1">
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
                <FiMapPin className="text-lg mr-2 text-orange-500" />
                <span>{service.address}</span>
              </div>

              <div className="mt-2 flex items-center text-sm text-gray-500">
                <FiCalendar className="text-base mr-2 text-orange-500" />
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
              <FaWhatsapp className="text-xl mr-2" />
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