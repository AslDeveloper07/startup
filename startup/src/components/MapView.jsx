import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import "./../App.css";

const MapView = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mock location data
  const locations = [
    {
      id: 1,
      name: "Elektrik montaj",
      address: "Toshkent sh., Yunusobod tumani",
      description: "Professional elektrik xizmatlari. Barcha turdagi elektr ishlari, montaj, ta'mirlash va loyihalash ishlari bajariladi.",
      images: [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200"
      ],
      coordinates: { lat: 41.311081, lng: 69.240562 },
    },
    {
      id: 2,
      name: "Santexnika xizmati",
      address: "Toshkent sh., Mirzo Ulug'bek tumani",
      description: "Santexnika ishlari professional darajada. Suv o'tkazish, ta'mirlash, yangi tizimlar o'rnatish.",
     images: [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200"
      ],
      coordinates: { lat: 41.315, lng: 69.245 },
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    if (isMobile) {
      setShowDetails(true);
    }
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      alert(`"${selectedLocation.name}" joyi tanlandi!`);
    } else {
      alert("Iltimos, biror joyni tanlang");
    }
  };

  return (
    <div className="map-view-app">
      <header className="map-view-header">
        <button onClick={() => navigate(-1)} className="map-view-back-button">
          <FiArrowLeft className="button-icon" />
          Orqaga
        </button>
        <h2 className="map-view-title">Xarita</h2>
        <button className="map-view-confirm-button" onClick={handleConfirm}>
          <FiCheck className="button-icon" />
          Belgilash
        </button>
      </header>

      <main className="map-view-main-content">
        <div className="map-view-container">
          <div className="map-view-placeholder">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className={`map-view-marker ${selectedLocation?.id === loc.id ? "active" : ""}`}
                style={{
                  left: `${50 + (loc.coordinates.lng - 69.24) * 100}%`,
                  top: `${50 + (41.31 - loc.coordinates.lat) * 100}%`,
                }}
                onClick={() => handleMarkerClick(loc)}
              >
                <FaMapMarkerAlt />
                {selectedLocation?.id === loc.id && (
                  <div className="map-view-marker-label">{loc.name}</div>
                )}
              </div>
            ))}
            <div className="map-view-grid"></div>
          </div>

          {isMobile ? (
            <div className={`map-view-mobile-details ${showDetails ? "visible" : ""}`}>
              <div className="map-view-drag-handle" onClick={() => setShowDetails(!showDetails)}>
                <FaChevronUp className={`map-view-drag-icon ${showDetails ? "up" : "down"}`} />
              </div>

              {selectedLocation ? (
                <div className="map-view-details-content">
                  <h3>{selectedLocation.name}</h3>
                  <p className="map-view-address">{selectedLocation.address}</p>
                  <p className="map-view-description">{selectedLocation.description}</p>

                  <div className="map-view-image-gallery">
                    {selectedLocation.images.map((img, index) => (
                      <img key={index} src={img} alt={selectedLocation.name} />
                    ))}
                  </div>
                </div>
              ) : (
                <p className="map-view-no-selection">Joyni tanlang</p>
              )}
            </div>
          ) : (
            selectedLocation && (
              <div className="map-view-desktop-details">
                <div className="map-view-details-content">
                  <h3>{selectedLocation.name}</h3>
                  <p className="map-view-address">{selectedLocation.address}</p>
                  <p className="map-view-description">{selectedLocation.description}</p>

                  <div className="map-view-image-gallery">
                    {selectedLocation.images.map((img, index) => (
                      <img key={index} src={img} alt={selectedLocation.name} />
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MapView;