import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service, onSelect, isSelected }) => {
  return (
    <div
      className={`service-card ${service.status} ${
        isSelected ? "selected" : ""
      }`}
      onClick={onSelect}
    >
      <div className="card-content">
        <div className="card-img">
          <img src={service.img} alt={service.title} />
        </div>
        <div className="card-text">
          <div className="card-header">
          <h2 className="card-title">{service.title}</h2>
          <span className={`status-badge ${service.status}`}>
            {service.status === "active" && "Faol"}
            {service.status === "busy" && "Band"}
            {service.status === "inactive" && "Nofaol"}
            {service.status === "available" && "Mavjud"}
          </span>
        </div>
        </div>
        <p className="card-description">{service.description}</p>
        <div className="card-footer">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < service.rating ? "filled" : ""} />
            ))}
          </div>
          <button className="order-btn">Buyurtma</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard