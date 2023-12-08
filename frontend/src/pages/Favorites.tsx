import FavoriteTutorPage from '../components/favoriteTutorPage/FavoriteTutor';
import Header from '../components/homePage/Header';
import AccessControl from "../components/AccessControl";

function Favorites() {
  return (
    <div style={{height: '100vh'}}>
      <AccessControl/>
      <Header/>
      <FavoriteTutorPage/>
    </div>
  );
}

export default Favorites;
