import FavoriteTutorPage from '../components/favoriteTutorPage/FavoriteTutor';
import Header from '../components/profilePage/Header';

function Profile() {
  return (
    <div style={{height: '100vh'}}>
      <Header/>
      <FavoriteTutorPage/>
    </div>
  );
}

export default Profile;