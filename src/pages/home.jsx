import React from 'react';
import SearchBar from '../components/searchbar.jsx';  
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

const HomePage = () => (
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
    <Block>
      <SearchBar />
    </Block>

  </Page>
);
export default HomePage;