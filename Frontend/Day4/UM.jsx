// AdminProfilePage.jsx
import { useState } from 'react';
import '../assets/css/UserMan.css';
import { useNavigate } from 'react-router-dom';

const Userman = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Varun', email: 'va@example.com', role: 'Admin' },
    { id: 2, username: 'Harish', email: 'har@example.com', role: 'User' },
    { id: 3, username: 'ganesh', email: 'gan@example.com', role: 'User' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    console.log('Logged out');
  };

  return (
    <div>
    <center><h2 className='adpan'>ADMINISTRATION PANEL</h2></center>

<div className="admin-dashboard">
    <div className="sidebar">
      <ul>
        <li><a href="/ad-db">Profile</a></li>
        <li><a href="/users">Users Management</a></li>
        <li><a href="/courseMan">Course Management</a></li>
        <li><a href="/appMan">Applicant Management</a></li>
        <li><a href="/">LogOut</a></li>
      </ul>
    </div>
    {/* <div className="main-content">
      <Admindetails/>
    </div> */}
    <div className="admin-profile-container">
      <div className="admin-profile-header">
        <h1>Welcome, Admin</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="admin-profile-content">
        <div className="user-table">
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Userman;
