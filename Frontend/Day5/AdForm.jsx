import '../assets/css/form.css';
import Footer from './footer';
import Nav from './navbar';
const RegistrationForm = () => {
  return (
    <div>
      <nav>
       <Nav/>
      </nav>
      <form className="registration-form">
        <center><h1 className='for'>ADMISSION FORM</h1></center>
      <div className='get-done'>
        <div className="form-container">
          <div className="personal-details">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input required id="fullName" type="text" placeholder="Enter your full name" />
              <label htmlFor="dob">Date of Birth</label>
              <input required id="dob" type="date" />
              <label htmlFor="email">Email</label>
              <input required id="email" type="email" placeholder="Enter your email" />
              <label htmlFor="mobile">Mobile Number</label>
              <input required id="mobile" type="tel" placeholder="Enter mobile number" />
              <label htmlFor="gender">Gender</label>
              <input required id="gender" type="text" placeholder="Enter your gender" />
              <label htmlFor="occupation">Address</label>
              <input required id="occupation" type="text" placeholder="Enter your occupation" />
            </div>
          </div>
          <div className="identity-details">
            <h2>Identity Details</h2>
            <div className="form-group">
              <label htmlFor="idType">Aadhar Number</label>
              <input required id="idType" type="text" placeholder="Enter ID type" />
              <label htmlFor="idNumber">10th Mark</label>
              <input required id="idNumber" type="text" placeholder="Enter ID number" />
              <label htmlFor="issueAuthority">12th Mark</label>
              <input required id="issueAuthority" type="text" placeholder="Enter issue department" />
            
            </div>
          </div>
          </div>  
        </div>
        <button className='btn-form' type="submit">Next</button>
      </form>
      

      <div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

// const handleSubmit = (event) => {
//   event.preventDefault();
// }

export default RegistrationForm;


