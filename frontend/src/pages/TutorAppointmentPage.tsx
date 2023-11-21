import Header from '../components/homePage/TutorHeader';
import TutorAppointmentPage from '../components/appointmentPage/TutorAppointmentPage';
import AccessControl from "../components/AccessControl";

function TutorProfile() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl/>
      <Header/>
      <TutorAppointmentPage/>
    </div>
  );
}

export default TutorProfile;
