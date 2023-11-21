import BookAppointment from '../components/appointmentPage/BookAppointment';
import Header from '../components/profilePage/Header';
import AccessControl from "../components/AccessControl";

function Book() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl />
      <Header/>
      <BookAppointment/>
    </div>
  );
}

export default Book;
