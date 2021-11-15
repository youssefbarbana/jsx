import './App.css';
import './style.css';
import imageLike from "./like.png"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className="title red">Abdelhak Labyadh</h1>
        <br />
        <img src={imageLike} alt="like emoticone" />
        <br />
        <img src="/funny.jfif" alt="funny emoticone" />
      </div> 
      <video width="320" height="240" controls>
       <source src="myVideo.mp4" type="video/mp4" /> 
      </video>
    </div>
  );
}

export default App;
