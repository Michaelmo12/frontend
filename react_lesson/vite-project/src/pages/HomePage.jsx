import { useState } from 'react';
import Counter from '../components/Counter';
import NameCard from '../components/NameCard';
import Button from '../components/common/Button';
import { DEFAULT_LOCATION, MESSAGES, UI_CONSTANTS } from '../constants';
import { useToggleMessage } from '../hooks/useAppState';
import { formatAddress } from '../utils/helpers';
import ToggleText from '../components/ToggleText';



function HomePage() {
  const [country, setCountry] = useState(DEFAULT_LOCATION.country);
  const [city, setCity] = useState(DEFAULT_LOCATION.city);
  const [address, setAddress] = useState(DEFAULT_LOCATION.address);
  const { message, toggleMessage } = useToggleMessage();
  const [isVisible, setIsVisible] = useState(true);

  function showInfo() {
    alert(formatAddress(country, city, address));
  }

  function changeFlag() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="home-page">
      <h1 className="text-center">Welcome to the Home Page</h1>
      <p>Message: {message}</p>
      
      {isVisible && (
        <div>
          <p>Country: {country}</p>
          <p>City: {city}</p>
          <p>Address: {address}</p>
        </div>
      )}
      
      
      <div className="button-group">
        <Button onClick={toggleMessage}>
          {UI_CONSTANTS.BUTTON_TEXTS.CHANGE_MESSAGE}
        </Button>
        <Button onClick={showInfo} variant="secondary">
          {UI_CONSTANTS.BUTTON_TEXTS.SHOW_INFO}
        </Button>
        <Button onClick={changeFlag} size="large">
          {UI_CONSTANTS.BUTTON_TEXTS.TOGGLE_VISIBILITY}
        </Button>
      </div>

      <Counter />
      <NameCard />
      <ToggleText />
    </div>
  );
}

export default HomePage;
