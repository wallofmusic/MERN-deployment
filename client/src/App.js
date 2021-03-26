import logo from './logo.svg';
import './App.css';
import {Router, Link} from '@reach/router';
import Dashboard from './views/Dashboard';
import NewPet from './views/NewPet';
import ViewPet from './views/ViewPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Pet Shelter</h1>
      </header>
      <Router>
        <Dashboard path='/'/>
        <NewPet path ='/pets/new'/>
        <ViewPet path = '/pets/:id'/>
        <EditPet path='/pets/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;
