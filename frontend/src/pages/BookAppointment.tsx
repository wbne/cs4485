import BookAppointment from '../components/appointmentPage/BookAppointment';
import Header from '../components/profilePage/Header';

function Book() {
  return (
    <div style={{height: '100vh'}}>
      <Header/>
      <BookAppointment/>
    </div>
  );
}

export default Book;