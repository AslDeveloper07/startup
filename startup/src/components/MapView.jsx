import React, { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import { IoIosArrowBack } from "react-icons/io";
import "./../index.css";

// SVG marker data URIs
const centerMarkerUrl =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#FF6D00">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5
      c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5
      2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>`
  );

const locationMarkerUrl =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#FF6D00">
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
    <div className="map-view-app bg-gray-50">
      <header className="map-view-header bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <Link
          to={"/"}
          onClick={() => navigate(-1)}
          className="map-view-back-button flex items-center text-orange-600 hover:text-orange-800 transition-colors"
        >
          <IoIosArrowBack className="back mr-2" /> Orqaga
        </Link>
        <h2 className="text-xl font-semibold text-gray-800">Xarita</h2>
        <div className="w-6"></div>
      </header>

      <main className="map-view-main-content relative">
        <div className="map-view-container flex flex-col md:flex-row h-[calc(100vh-64px)]">
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
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    featureType: "transit",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                ],
              }}
            >
              <Marker
                position={defaultCenter}
                icon={{ url: centerMarkerUrl }}
                onClick={() => setActiveInfoWindow("center")}
              >
                {activeInfoWindow === "center" && (
                  <InfoWindow onCloseClick={() => setActiveInfoWindow(null)}>
                    <div className="p-2">
                      <strong className="text-orange-600">Usta Service</strong>
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
                      <div className="p-2">
                        <strong className="text-orange-600">{loc.name}</strong>
                        <p className="text-gray-600 text-sm">{loc.address}</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </LoadScript>

          {/* Floating Action Button */}
          <button
            onClick={handleConfirm}
            className="fixed bottom-6 right-6 md:right-auto md:left-1/2 md:transform md:-translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all z-10"
            aria-label="Select location"
          >
            <LuMapPin className="text-xl" />
          </button>

          {/* Mobile Details Panel */}
          {isMobile ? (
            <div
              className={`map-view-mobile-details bg-white rounded-t-2xl shadow-xl transition-all duration-300 ${
                showDetails ? "visible h-1/2" : "h-16"
              }`}
            >
              <div
                className="map-view-drag-handle flex justify-center items-center py-3 bg-orange-50 rounded-t-2xl cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? (
                  <FaChevronDown className="text-orange-600 text-lg" />
                ) : (
                  <FaChevronUp className="text-orange-600 text-lg" />
                )}
              </div>
              {selectedLocation ? (
                <div className="slideBar p-4 overflow-y-auto h-[calc(100%-52px)]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {selectedLocation.name}
                  </h3>
                  <p className="text-gray-600 mb-3 flex items-center">
                    <FaMapMarkerAlt className="text-orange-500 mr-2" />
                    {selectedLocation.address}
                  </p>
                  <p className="text-gray-700 mb-4">{selectedLocation.description}</p>
                  <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
                    {selectedLocation.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={selectedLocation.name}
                        className="w-32 h-24 object-cover rounded-lg shadow-sm"
                      />
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {selectedLocation.details.map((d, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block bg-orange-100 text-orange-600 rounded-full p-1 mr-2">
                          <FiCheck size={12} />
                        </span>
                        <span className="text-gray-700">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500">Xaritadan joy tanlang</p>
                </div>
              )}
            </div>
          ) : (
            selectedLocation && (
              <div className="map-view-desktop-details w-full md:w-96 bg-white shadow-xl p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedLocation.name}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-2" />
                  {selectedLocation.address}
                </p>
                <p className="text-gray-700 mb-5">{selectedLocation.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedLocation.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={selectedLocation.name}
                      className="w-full h-32 object-cover rounded-lg shadow-sm"
                    />
                  ))}
                </div>
                <ul className="space-y-3 mb-6">
                  {selectedLocation.details.map((d, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block bg-orange-100 text-orange-600 rounded-full p-1 mr-3 mt-1">
                        <FiCheck size={12} />
                      </span>
                      <span className="text-gray-700">{d}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleConfirm}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center"
                >
                  <LuMapPin className="mr-2 text-lg" />
                  Joyni tanlash
                </button>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default MapView;