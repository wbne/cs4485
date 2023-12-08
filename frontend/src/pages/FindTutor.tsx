import Header from '../components/homePage/Header';
import FindTutorPage from '../components/findTutorPage/FindTutorPage';
import AccessControl from "../components/AccessControl";

function FindTutor() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl/>
      <Header/>
      <FindTutorPage/>
    </div>
  );
}

export default FindTutor;
