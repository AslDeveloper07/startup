import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import { IoIosArrowBack } from "react-icons/io";
import "./../App.css";

// SVG marker data URIs
const centerMarkerUrl =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#FF9800">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5
      c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5
      2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`
  );

const locationMarkerUrl =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#FF9800">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5
      c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5
      2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`
  );

const MapView = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [map, setMap] = useState(null);
  const [activeInfoWindow, setActiveInfoWindow] = useState(null);

  const defaultCenter = { lat: 41.311081, lng: 69.240562 };

  const locations = [
    {
      id: 1,
      name: "Elektrik montaj korxonasi",
      address: "Toshkent sh., Yunusobod tumani, Navoiy ko'chasi 45",
      description: "Professional elektrik xizmatlari...",
      details: [
        "10 yillik tajriba",
        "24/7 xizmat",
        "Mijozlar qoniqtirilganligi 98%",
      ],
      images: [
        "https://labcfrontdoor.co.uk/media/0pyn2gyf/how-to-choose-builder.jpg?width=487&height=324&v=1d64e317f111bc0",
        "https://na.rdcpix.com/155592788/7010820eb479aad468cd5e188c845290w-c0xd-w436_h236_r4_q80.webp",
      ],
      coordinates: { lat: 41.311081, lng: 69.240562 },
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setActiveInfoWindow(location.id);
    if (isMobile) setShowDetails(true);
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      alert(`"${selectedLocation.name}" joyi tanlandi!`);
    } else {
      alert("Iltimos, biror joyni tanlang");
    }
  };

  const containerStyle = { width: "100%", height: "100%" };

  return (
    <div className="map-view-app">
      <header className="map-view-header">
        <Link
          to={"/"}
          onClick={() => navigate(-1)}
          className="map-view-back-button"
        >
          <IoIosArrowBack className="back" /> Orqaga
        </Link>
        <h2>Xarita</h2>
      </header>

      <main className="map-view-main-content">
        <div className="map-view-container">
          <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={14}
              onLoad={onMapLoad}
              options={{
                streetViewControl: true,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: true,
              }}
            >
              <Marker
                position={defaultCenter}
                icon={{ url: centerMarkerUrl }}
                onClick={() => setActiveInfoWindow("center")}
              >
                {activeInfoWindow === "center" && (
                  <InfoWindow onCloseClick={() => setActiveInfoWindow(null)}>
                    <div>
                      <strong>Usta Service</strong>
                    </div>
                  </InfoWindow>
                )}
              </Marker>

              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={loc.coordinates}
                  icon={{ url: locationMarkerUrl }}
                  onClick={() => handleLocationSelect(loc)}
                >
                  {activeInfoWindow === loc.id && (
                    <InfoWindow onCloseClick={() => setActiveInfoWindow(null)}>
                      <div>
                        <strong>{loc.name}</strong>
                        <p>{loc.address}</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </LoadScript>

          {/* Details */}
          {isMobile ? (
            <div
              className={`map-view-mobile-details ${
                showDetails ? "visible" : ""
              }`}
            >
              <div
                className="map-view-drag-handle"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? <FaChevronDown /> : <FaChevronUp />}
              </div>
              {selectedLocation ? (
                <div className="slideBar">
                  <h3>{selectedLocation.name}</h3>
                  <p>
                    <FaMapMarkerAlt /> {selectedLocation.address}
                  </p>
                  <p>{selectedLocation.description}</p>
                  {selectedLocation.images.map((img, i) => (
                    <img key={i} src={img} alt={selectedLocation.name} />
                  ))}
                  <ul>
                    {selectedLocation.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="cntr">Xaritadan joy tanlang</p>
              )}
            </div>
          ) : (
            selectedLocation && (
              <div className="map-view-desktop-details">
                <h3>{selectedLocation.name}</h3>
                <p>
                  <FaMapMarkerAlt /> {selectedLocation.address}
                </p>
                <p>{selectedLocation.description}</p>
                {selectedLocation.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedLocation.name} />
                ))}
                <ul>
                  {selectedLocation.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MapView;
