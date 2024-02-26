import '../assets/css/userdetails.css';
import { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
const Userdetails = () => {

  const [user, setUser] = useState({
    name: 'Jegajith',
    location: 'Coimbatore,TamilNadu,India',
    age: 20,
    contact: 'Jegajith2004@gmail.com | 7904138789',
    photo: 'https://res.cloudinary.com/dobqwdsoy/image/upload/v1708927214/blank-profile-picture-973460_1280_eym0bc.webp',
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  return (
    <div className='main1'>
      <nav>
        <Navbar/>
      </nav>
    <div className="profile-container-stu">
      <img src={user.photo} alt="Profile" className="profile-photo" />
      <div className="profile-header">
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <h2>User Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Location: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.location}
              onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
            />
            <br />
            <label>Age: </label>
            <input
              className="input-field"
              type="number"
              value={editedUser.age}
              onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
            />
            <br />
            <label>Contact: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.contact}
              onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>
    </div>
      <Footer/>
    </div>
  );
};

export default Userdetails;