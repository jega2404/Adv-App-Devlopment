import { useState } from 'react';
import '../assets/css/cm.css';
import { useNavigate } from 'react-router-dom';

const Coursedet = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Python Programming', role: 'Coursera' },
    { id: 2, username: 'Java Programming', role: 'TCS' },
    { id: 3, username: 'Testing', role: 'Selenium' },
  ]);
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    email: '',
    role: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    console.log('Logged out');
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setFormData(user);
    setIsEdit(true);
  };

  const handleSave = () => {
    if (isEdit) {
      setUsers(users.map(user => (user.id === formData.id ? formData : user)));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: '', username: '', email: '', role: '' });
    setIsEdit(false);
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
      <div className="admin-profile-container">
        <div className="admin-profile-header">
          <h1>Welcome, Admin</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <div className="admin-profile-content">
          <div className="user-table">
            <h2>Courses</h2>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  {/* <th>Description</th> */}
                  <th>Roles</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    {/* <td>{user.email}</td> */}
                    <td>{user.role}</td>
                    <td>
                      <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="user-form">
            <h2>{isEdit ? 'Edit Course' : 'Add Course'}</h2>
            <input
              type="text"
              placeholder="Courses"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            {/* <input
              type="text"
              placeholder="Colleges"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            /> */}
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
            <button onClick={handleSave} className='save-button'>{isEdit ? 'Save' : 'Add'}</button>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Coursedet;