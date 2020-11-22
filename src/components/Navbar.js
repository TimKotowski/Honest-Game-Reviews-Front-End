import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Search, Segment,  } from 'semantic-ui-react'


 const Navbar = () => {
const [activeItem, setItem] = useState({ activeItem: 'home' })

const handleItemClick = (e, { name }) => {
  setItem({ activeItem: name })
}
  return (
      <Segment
            inverted
            vertical
          >
    <Menu inverted pointing secondary size='large'inverted>
          <Menu.Item
            name='home'
            as={NavLink} exact to="/"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            />
             <Menu.Item
            name='games'
            as={NavLink} exact to="/games"
            active={activeItem === 'games'}
            onClick={handleItemClick}
            />
          <Menu.Item
            name='news'
            active={activeItem === 'news'}
            onClick={handleItemClick}
            />
          <Menu.Item
            name='platforms'
            active={activeItem === 'platforms'}
            onClick={handleItemClick}
            />
      {/* <Search labelPosition='right'/> */}
        </Menu>
        </Segment>
  )
}

export default Navbar

