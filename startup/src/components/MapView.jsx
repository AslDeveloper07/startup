import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import "./../App.css";

const MapView = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [map, setMap] = useState(null);

  // Default center - Tashkent coordinates
  const defaultCenter = {
    lat: 41.311081,
    lng: 69.240562
  };

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

  const onMapLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100%'
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
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={14}
              onLoad={onMapLoad}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: true,
                clickableIcons: false
              }}
            >
              {/* Fixed center marker */}
              <Marker
                position={defaultCenter}
                icon={{
                  url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF6B00" width="36px" height="36px">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>`
                  ),
                  scaledSize: new window.google.maps.Size(36, 36),
                  anchor: new window.google.maps.Point(18, 36)
                }}
              >
                <InfoWindow position={defaultCenter}>
                  <div className="map-view-info-window">
                    <h4>Usta Service</h4>
                  </div>
                </InfoWindow>
              </Marker>

              {/* Location markers */}
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.coordinates}
                  onClick={() => handleLocationSelect(location)}
                  icon={{
                    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4285F4" width="36px" height="36px">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>`
                    ),
                    scaledSize: new window.google.maps.Size(36, 36),
                    anchor: new window.google.maps.Point(18, 36)
                  }}
                >
                  <InfoWindow position={location.coordinates}>
                    <div className="map-view-info-window">
                      <h4>{location.name}</h4>
                      <p>{location.address}</p>
                    </div>
                  </InfoWindow>
                </Marker>
              ))}
            </GoogleMap>
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