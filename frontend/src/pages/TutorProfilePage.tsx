import Header from '../components/homePage/TutorHeader';
import TutorProfilePage from '../components/tutorProfilePage/tutorProfilePage';
import AccessControl from "../components/AccessControl";

function TutorProfile() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl/>
      <Header/>
      <TutorProfilePage/>
    </div>
  );
}

export default TutorProfile;
