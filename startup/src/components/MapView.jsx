import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import "./../App.css";

const MapView = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Mock location data
  const locations = [
    {
      id: 1,
      name: "Elektrik montaj korxonasi",
      address: "Toshkent sh., Yunusobod tumani, Navoiy ko'chasi 45",
      description: "Professional elektrik xizmatlari. Barcha turdagi elektr ishlari, montaj, ta'mirlash va loyihalash ishlari bajariladi.",
      details: [
        "✅ 10 yillik tajribaga ega mutaxassislar",
        "🏭 5000 m² ishlab chiqarish maydoni",
        "👨‍🔧 150 nafar malakali ishchi",
        "🔌 Har qanday murakkab elektr loyihalari",
        "📊 Yillik 250 ta loyiha",
        "🏆 5 yil ketma-ket 'Yilning eng yaxshi korxonasi'",
        "🌐 Xalqaro sertifikatlar",
        "🛠️ Zamonaviy uskunalar",
        "📞 24/7 qo'llab-quvvatlash",
        "💯 Mijozlar qoniqtirilganligi 98%"
      ],
      images: [
        "https://via.placeholder.com/600x400?text=Elektrik+Korxonasi+1",
        "https://via.placeholder.com/600x400?text=Elektrik+Korxonasi+2"
      ],
      coordinates: { lat: 41.311081, lng: 69.240562 },
    },
    {
      id: 2,
      name: "Santexnika ishlab chiqarish",
      address: "Toshkent sh., Mirzo Ulug'bek tumani, Amir Temur shoh ko'chasi 78",
      description: "Santexnika ishlari professional darajada. Suv o'tkazish, ta'mirlash, yangi tizimlar o'rnatish.",
      details: [
        "🚿 15 yillik ish tajribasi",
        "🏢 8000 m² ishlab chiqarish maydoni",
        "👷 200 nafar ishchi",
        "🚽 Har qanday santexnika mahsulotlari",
        "📈 Yillik 350 ta loyiha",
        "🏅 'O'zbekistonning eng yaxshi ishlab chiqaruvchisi'",
        "🌍 5 mamlakatga eksport",
        "⚙️ Zamonaviy ishlab chiqarish liniyasi",
        "📱 Onlayn buyurtma tizimi",
        "🔧 2 yil kafolat"
      ],
      images: [
        "https://via.placeholder.com/600x400?text=Santexnika+Korxonasi+1",
        "https://via.placeholder.com/600x400?text=Santexnika+Korxonasi+2"
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

  const handleLocationSelect = (location) => {
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

  const handleMapLoad = () => {
    setMapLoaded(true);
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
          <div className="map-view-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95942.9548579405!2d69.1392832!3d41.28251255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1620000000000!5m2!1sru!2s"
              className="map-view-iframe"
              allowFullScreen=""
              loading="lazy"
              onLoad={handleMapLoad}
              title="Toshkent xaritasi"
            ></iframe>

            {mapLoaded && (
              <div className="map-view-overlay">
                {/* Single fixed orange marker in the center */}
                <div className="map-view-fixed-marker">
                  <div className="fixed-marker-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="fixed-marker-text">Usta Service</div>
                </div>
              </div>
            )}
          </div>

          {isMobile ? (
            <div className={`map-view-mobile-details ${showDetails ? "visible" : ""}`}>
              <div className="map-view-drag-handle" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? (
                  <FaChevronDown className="map-view-drag-icon" />
                ) : (
                  <FaChevronUp className="map-view-drag-icon" />
                )}
              </div>

              {selectedLocation ? (
                <div className="map-view-details-content">
                  <h3 className="location-title">{selectedLocation.name}</h3>
                  <p className="location-address">
                    <FaMapMarkerAlt className="address-icon" />
                    {selectedLocation.address}
                  </p>
                  <p className="location-description">{selectedLocation.description}</p>

                  <div className="location-images">
                    {selectedLocation.images.map((img, index) => (
                      <img key={index} src={img} alt={selectedLocation.name} />
                    ))}
                  </div>

                  <div className="location-details">
                    <h4>Korxona haqida:</h4>
                    <ul>
                      {selectedLocation.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="map-view-no-selection">
                  <p>Xaritadan joyni tanlang</p>
                  <p className="hint-text">Markazda Usta Service belgilangan</p>
                </div>
              )}
            </div>
          ) : (
            selectedLocation && (
              <div className="map-view-desktop-details">
                <div className="map-view-details-content">
                  <h3 className="location-title">{selectedLocation.name}</h3>
                  <p className="location-address">
                    <FaMapMarkerAlt className="address-icon" />
                    {selectedLocation.address}
                  </p>
                  <p className="location-description">{selectedLocation.description}</p>

                  <div className="location-images">
                    {selectedLocation.images.map((img, index) => (
                      <img key={index} src={img} alt={selectedLocation.name} />
                    ))}
                  </div>

                  <div className="location-details">
                    <h4>Korxona haqida:</h4>
                    <ul>
                      {selectedLocation.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
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