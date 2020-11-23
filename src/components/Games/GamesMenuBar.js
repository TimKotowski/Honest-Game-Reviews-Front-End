import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { getPublisher } from '../../store/games';
import history from '../../history';

const genres = [
  { key: 1, text: 'Reset List', value: 1,  },
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
]


const GamesMenuBar = () => {
  const [activeItem, setItem] = useState({ activeItem: 'home' });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getPublisher(e.target.textContent));
    history.push(`/api/v1/games/company?publisher=${e.target.textContent}`);
  };

  const handleItemClick = (e, { name }) => {
    setItem({ activeItem: name });
  };
  return (
    <Menu inverted color="purple" size="large" pointing style={{ marginTop: '1em', color:"grey", maxWidth:"1000px" }}>
      <Menu.Item
        name="platforms"
        style={{width: "100px"}}
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
      style={{width: "100px"}}
        name="news"
        active={activeItem === 'games'}
        onClick={handleItemClick}
      />
      <Dropdown
      text="Companies"
      pointing="left"
      className="link item"
      options={genres}
      selection
      onChange={handleChange}
      >
      </Dropdown>
    </Menu>
  );
};

export default GamesMenuBar;
