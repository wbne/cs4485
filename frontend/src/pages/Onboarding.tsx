import RegistrationForm from '../components/formPage/RegistrationForm'
import TutorRegistration from '../components/formPage/TutorRegistration'
import Header from '../components/landingPage/Header';

function TutorOnboarding() {
  return (
    <div style={{height: '100vh'}}>
	<Header/>
	<TutorRegistration/>
    </div>
  );
}

export default TutorOnboarding;
