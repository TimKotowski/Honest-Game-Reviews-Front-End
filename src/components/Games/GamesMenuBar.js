import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getPublisher } from '../../store/games';
import history from '../../history';

const companies = [
  { key: 1, text: 'Reset List', value: 1 },
  { key: 2, text: 'Blizzard Entertainment', value: 2 },
  { key: 3, text: 'Epic Games', value: 3 },
  { key: 4, text: 'Activision', value: 4 },
  { key: 5, text: 'Riot Games', value: 5 },
  { key: 6, text: 'Valve Corporation ', value: 6 },
  { key: 7, text: 'Electronic Arts', value: 7 },
  { key: 8, text: 'Bungie', value: 8 },
  { key: 9, text: 'PUBG Corporation', value: 9 },
  { key: 10, text: 'MiHoYo', value: 10 },
  { key: 11, text: 'Sega', value: 11 },
  { key: 12, text: 'Nintendo Entertainment', value: 12 },
  { key: 13, text: 'Young Horses', value: 13 },
  { key: 14, text: 'InnerSloth', value: 14 },
  { key: 15, text: 'Sony Interactive Entertainment', value: 15 },
  { key: 16, text: 'Xbox Game Studios', value: 16 },
  { key: 17, text: 'Respawn Entertainment', value: 17 },
  { key: 18, text: 'Ubisoft', value: 18 },
];
const platforms = [
  { key: 1, text: 'PC', value: 1 },
  { key: 2, text: 'Xbox-360', value: 2 },
  { key: 3, text: 'Xbox-Series-X', value: 3 },
  { key: 4, text: 'Xbox-Series-S', value: 4 },
  { key: 5, text: 'PS4', value: 5 },
  { key: 6, text: 'PS5 ', value: 6 },
  { key: 7, text: 'Mobile', value: 7 },
];
const GamesMenuBar = () => {
  const [activeItem, setItem] = useState({ activeItem: 'home' });
  const [dropValue, setdropValue] = useState("Companies")
  const [dropValuePlatforms, setdropValuePlatforms] = useState("Platforms")

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dropDownValue(e.target.textContent)
    dispatch(getPublisher(e.target.textContent));
    history.push(`/api/v1/games/company?publisher=${e.target.textContent}`);
  };

  const dropDownValue = (company) => {
    setdropValue(company)
  }


  const handleItemClick = (e, { name }) => {
    setItem({ activeItem: name });
  };

  return (
    <Menu
      inverted
      size="large"
      pointing
      style={{
        marginTop: '1em',
        backgroundColor: '#772ce7',
        maxWidth: '1000px',
      }}
    >
      <Dropdown
        options={platforms}
        placeholder={dropValuePlatforms}
        pointing="left"
        className="link item"
        value={dropValuePlatforms}
        selection
        // onChange={handleChange}
      ></Dropdown>
      <Dropdown
        placeholder={dropValue}
        pointing="right"
        className="link item"
        options={companies}
        value={dropValue}
        selection
        onChange={handleChange}
      ></Dropdown>
    </Menu>
  );
};

export default GamesMenuBar;
