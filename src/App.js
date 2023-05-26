// import thumbnail from '/thumbnail.jpg';
import './App.css';
import Thumbnail from './components/Thumbnail/Thumbnail';
import Info from './components/Info/Info';
import Stats from './components/Stats/Stats';
import Header from './components/Header/Header'
import data from './data';

function App() {
  console.log(data);
  return (
    <div className='outer-container'>
      
      <div className='wrapper'>
        <Header />
        {data.map((item) => {
           return(
            <div className='container'>
              <Thumbnail image={item.image}  />
              <Info title={item.title} rating={item.rating} artist={item.artist} desc={item.desc} completion_rate={item.completion_rate}  />
              <hr width="1" size="350" />
              <Stats unique_plays={item.unique_plays} total_plays={item.total_plays}/>
            </div>
           );
        })}
        </div>
    </div>
  );
}

export default App;
