import AppointmentsPage from '../components/appointmentPage/AppointmentPage'; 
import Header from '../components/profilePage/Header';
import AccessControl from "../components/AccessControl";

function Appointment() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl />
      <Header/>
      <AppointmentsPage/>
    </div>
  );
}

export default Appointment;
