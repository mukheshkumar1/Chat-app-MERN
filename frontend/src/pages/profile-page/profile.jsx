import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { IoPlaySkipBackOutline } from 'react-icons/io5'; 
import { useAuthContext } from '../../Context/AuthContext';

const ProfilePage = () => {
  const { authUser } = useAuthContext();
  const [user, setUser] = useState({
    fullName: '',
    userName: '',
    email: '',
    profilePic: '',
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    if (authUser) {
      setUser({
        fullName: authUser.fullName,
        userName: authUser.userName,
        email: authUser.email,
        profilePic: authUser.profilePic,
      });
    }
  }, [authUser]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Profile
            <span className="text-blue-500"> Textgram</span>
          </h1>
        </div>
        <div className="flex flex-col items-center mt-4">
          <img
            src={user.profilePic || 'default-profile-pic.jpg'}
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold text-center text-gray-300 mb-2">{user.fullName}</h2>
          <p className="text-white">@{user.userName}</p>
          {user.email && <p className="text-gray-600">{user.email}</p>} 
        </div>
        <IoPlaySkipBackOutline onClick={handleBackToHome} className="text-2xl cursor-pointer w-6 h-6" /> 
      </div>
    </div>
  );
};

export default ProfilePage;
