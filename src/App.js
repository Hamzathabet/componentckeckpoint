import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';

function App() {
  let adress='abs';
  return (
    <div className="App">
        <div className='profile'>
          <ProfilePhoto/>
          <FullName/>
          <Adresse/>
          </div>
    </div>
  );
}

export default App;
