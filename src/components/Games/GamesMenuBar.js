import React, {useState} from 'react'
import {
  Menu,
  Dropdown
} from 'semantic-ui-react';

 const GamesMenuBar = () => {

  const [activeItem, setItem] = useState({ activeItem: 'home' })

const handleItemClick = (e, { name }) => {
  setItem({ activeItem: name })
}
  return (
    <Menu
    size='large'
    pointing
    style={{  marginTop: '1em' }}
    >
          <Menu.Item
            name='platforms'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            />
             <Menu.Item
            name='news'
            active={activeItem === 'games'}
            onClick={handleItemClick}
            />
          {/* <Menu.Item
            name='genres'
            active={activeItem === 'news'}
            onClick={handleItemClick}
            /> */}
        <Dropdown text='Genre' pointing='left' className='link item'>
      <Dropdown.Menu

      >
        <Dropdown.Item>mmorpg</Dropdown.Item>
        <Dropdown.Item>survival</Dropdown.Item>
        <Dropdown.Item>first-person-shooter</Dropdown.Item>
        <Dropdown.Item>moba</Dropdown.Item>
        <Dropdown.Item>battle-royale</Dropdown.Item>
        <Dropdown.Item>action</Dropdown.Item>
        <Dropdown.Item>adventure</Dropdown.Item>
        <Dropdown.Item>strategy</Dropdown.Item>
        <Dropdown.Item>rpg</Dropdown.Item>
        <Dropdown.Item>fighting</Dropdown.Item>
        <Dropdown.Item>sports</Dropdown.Item>
        <Dropdown.Divider />
      </Dropdown.Menu>
    </Dropdown>
        </Menu>
  )
}

export default GamesMenuBar
