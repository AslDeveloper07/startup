import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit, FaSave } from 'react-icons/fa';
import './../App.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState('Yangj ism');
  const [avatar, setAvatar] = useState(null);
  const [tempAvatar, setTempAvatar] = useState(null);

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
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
    // Here you would typically send the data to your backend
    console.log('Saved:', { name, avatar: tempAvatar || avatar });
  };

  const displayAvatar = tempAvatar || avatar;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button
          onClick={handleBackClick}
          className="back-button"
        >
          <FaArrowLeft /> Orqaga
        </button>
      </div>

      <div className="profile-container">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            {displayAvatar ? (
              <img
                src={displayAvatar}
                alt="Profile"
                className="avatar"
              />
            ) : (
              <div className="avatar-placeholder">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={handleEditAvatarClick}
              className="edit-avatar-button"
              title="Rasmni o'zgartirish"
            >
              <FaEdit />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className="name-input-container">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
            placeholder="Ismingizni kiriting"
          />
        </div>

        <button
          onClick={handleSaveClick}
          className="save-button"
        >
          <FaSave /> Saqlash
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;