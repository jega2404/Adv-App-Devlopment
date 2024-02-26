import { Link } from 'react-router-dom';
import '../assets/css/course.css';
import Footer from './footer';
import Nav from './navbar';

const Courses = () => {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      <center><h2 className='ug'>COMPUTER SCIENCE</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
            <Link to={'/form'} className='link'>Introduction to Java</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>Python</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>Basics of C Program</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>Introduction to HTML,CSS</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>React</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Selenium Testing</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> cloud Computing</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Ethical Hacking</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>  Computer Science and Engineering(Cyber Security)</Link>
          </div>
        </div>
      </div>
      <center><h2 className='pg'>DATA SCIENCE</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>Introduction to Data Science</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Big Data Analytics</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Data Analytics</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>  Engineer Design</Link>
          </div>
        </div>

      <div>
        <center><h1 className='as'>ARTS AND SCIENCE</h1></center>
      </div>


      <center><h2 className='pg1'>Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Mathematics</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>Electronics & Communication Systems</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Costume Design and Fashion</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Psychology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>  Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>  Data Science</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>Commerce with Computer Application</Link>
          </div>
        </div>
      </div>


      <center><h2 className='pg1'>Advanced Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
         <Link to={'/form'} className='link'>  English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Biotechnology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> Computer Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> International Business</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>Commerce</Link>
          </div>
        </div>
      </div>

      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Courses;
