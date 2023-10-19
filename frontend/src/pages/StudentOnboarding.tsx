import RegistrationForm from '../components/formPage/RegistrationForm'
import TutorRegistration from '../components/formPage/TutorRegistration'
import Header from '../components/landingPage/Header';

function StudentOnboarding() {
  return (
    <div style={{height: '100vh'}}>
	<Header/>
	<RegistrationForm/>
    </div>
  );
}

export default StudentOnboarding;
