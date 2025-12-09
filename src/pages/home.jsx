import { useState } from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  // Link,
  Toolbar,
  ToolbarPane,
  Block,
} from 'framework7-react';
import SearchBar from '../components/searchbar.jsx';  
import WeatherResults from '../components/weatherResults.jsx';
import ForecastButton from '../components/forecastButton.jsx';

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [dataTrigger, setDataTrigger] = useState(0); //to trigger weather data fetch
  const [showForecast, setShowForecast] = useState(false); //to track if weather data has been fetched and forecast button can be shown

  //function to handle search action from SearchBar component
  const handleSearch = () => {
    setShowForecast(false); //hide forecast button until weather data is fetched
    setDataTrigger(prev => prev + 1); //increment to trigger useEffect in WeatherResults
  };
  
  return(
  
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>AintNoSunshine</NavTitle>
      <NavTitleLarge>AintNoSunshine</NavTitleLarge>
    </Navbar>
    {/* Toolbar */}
    <Toolbar bottom>
      <ToolbarPane>
        {/* <Link>Left Link</Link>
        <Link>Right Link</Link> */}
      </ToolbarPane>
    </Toolbar>
    {/* Page content */}
    <Block>
      <p>Welcome to the Ain't No Sunshine Weather App</p>
      <p>Type your city into the search bar to see the weather in your location</p>
    </Block>
    {/*In this block we pass props from parent to child components*/}
    <Block className='weather-render'>
          <SearchBar location={location} onLocationChange={setLocation} onSearch={handleSearch} /> 
          <WeatherResults location={location} dataTrigger={dataTrigger} onWeatherReturned={() => setShowForecast(true)} />
          {showForecast && <ForecastButton location={location} />}
    </Block>

  </Page>
)
};
export default HomePage;