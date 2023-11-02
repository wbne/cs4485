import AppointmentsPage from '../components/appointmentPage/AppointmentPage'; 
import Header from '../components/profilePage/Header';

function Appointment() {
  return (
    <div style={{height: '100vh'}}>
      <Header/>
      <AppointmentsPage/>
    </div>
  );
}

export default Appointment;