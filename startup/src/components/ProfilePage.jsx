import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState("Yangi ism");
  const [avatar, setAvatar] = useState(null);
  const [tempAvatar, setTempAvatar] = useState(null);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleSaveClick = () => {
    if (tempAvatar) {
      setAvatar(tempAvatar);
      setTempAvatar(null);
    }
    console.log("Saved:", { name, avatar: tempAvatar || avatar });
  };

  const displayAvatar = tempAvatar || avatar;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm py-4 px-6 flex items-center">
        <button
          onClick={handleBackClick}
          className="flex items-center text-orange-600 hover:text-orange-800 transition-colors font-medium"
        >
          <FaArrowLeft className="mr-2" />
          Orqaga
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-md">
        <div className=" rounded-2xl overflow-hidden ">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8 ">
            <div className="relative group">
              {displayAvatar ? (
                <img
                  src={displayAvatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 shadow-md"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center text-white text-5xl font-bold border-4 border-orange-100 shadow-md">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}

              <Link
                to="/edit-avatar" // bu yerga kerakli yo'lni yozing
                className="absolute bottom-0 right-0 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-all transform hover:scale-110 group-hover:opacity-100 opacity-90"
                title="Rasmni o'zgartirish"
              >
                <FaEdit className="text-lg" />
              </Link>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

          {/* Name Input */}
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Ismingiz
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              placeholder="Ismingizni kiriting"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveClick}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-orange-700 hover:to-orange-600 transition-all flex items-center justify-center font-medium"
          >
            <FaSave className="mr-2" />
            Saqlash
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
