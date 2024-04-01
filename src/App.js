import TaskBorad from './taskBoard/TaskBoard';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import EditOverlay from './UI/EditOverlay';
import DeleteOverlay from './UI/DeleteOverlay';
function App() {
  return (
    <div className="App-main"> 
       <TaskBorad></TaskBorad>
       <EditOverlay></EditOverlay>
       <DeleteOverlay></DeleteOverlay>
    </div>
  );
}

export default App;
