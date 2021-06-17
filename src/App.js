import M from "./components/NavBar"
import './App.css';
import ImgSrc from "./assets/laptop.jpg"

function App() {
  const user={
    name:"asma",
    lastName:"chihi"
  }
  return (
    <div className="App">
   <M/>
   <h2 style={{color:"red",backgroundColor:"whitesmoke"}} >{user.name}</h2>
   <h2>{user.lastName}</h2>
   <img src="images/img.jpg" alt="photo" />
   <br />
  <img src={ImgSrc} alt="photo" />
    </div>
  );
}

export default App;
