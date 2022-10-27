import './App.css';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';

function App() {
  return (
    <div className="App">
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
