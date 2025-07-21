const ServiceCard = ({ service, onSelect, isSelected }) => {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    busy: "bg-yellow-100 text-yellow-800",
    available: "bg-blue-100 text-blue-800",
    inactive: "bg-gray-100 text-gray-800",
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
      onClick={onSelect}
    >
      <div className="flex">
        <img
          src={service.img}
          alt={service.title}
          className="w-24 h-24 object-cover"
        />
        <div className="p-3 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{service.title}</h3>
            <span
              className={`text-xs px-2 py-1 rounded-full ${statusColors[service.status]}`}
            >
              {service.status === "active" && "Faol"}
              {service.status === "busy" && "Band"}
              {service.status === "available" && "Mavjud"}
              {service.status === "inactive" && "Nofaol"}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-1">{service.description}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  className={i < service.rating ? "fill-current" : "text-gray-300"}
                />
              ))}
            </div>
            <div className="flex items-center ml-auto text-gray-500 text-sm">
              <FaMapMarkerAlt size={12} className="mr-1" />
              <span>1.2 km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};