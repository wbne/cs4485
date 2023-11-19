import Header from '../components/profilePage/Header';
import ProfilePage from '../components/profilePage/ProfilePage';
import AccessControl from "../components/AccessControl";

function Profile() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl/>
      <Header/>
      <ProfilePage/>
    </div>
  );
}

export default Profile;
