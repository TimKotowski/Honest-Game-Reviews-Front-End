import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Segment,  } from 'semantic-ui-react'


 const Navbar = () => {
const [activeItem, setItem] = useState({ activeItem: 'home' })

const handleItemClick = (e, { name }) => {
  setItem({ activeItem: name })
}



  return (
      <Segment
            inverted
            vertical
            fluid
            color="purple"
            style={{maxHeight: "60px", paddingTop: "4px"}}
          >
    <Menu
    inverted  secondary size='medium'>
          <Menu.Item
            name='home'
            style={{fontSize: "15px", fontWeight: "bold"}}
            as={NavLink} exact to="/"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            />
             <Menu.Item
                style={{fontSize: "15px", fontWeight: "bold"}}
            name='games'
            as={NavLink} exact to="/games"
            active={activeItem === 'games'}
            onClick={handleItemClick}
            />
          <Menu.Item
             style={{fontSize: "15px", fontWeight: "bold"}}
            name='news'
            active={activeItem === 'news'}
            onClick={handleItemClick}
            />
          <Menu.Item
             style={{fontSize: "15px", fontWeight: "bold"}}
            name='platforms'
            active={activeItem === 'platforms'}
            onClick={handleItemClick}
            />
          <Menu.Item
             style={{fontSize: "15px", fontWeight: "bold"}}
            name='reviews'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            />
              <Menu.Item position='right'>
                  <Button as='a'>
                    Log in
                  </Button>
                  <Button as='a'  style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
        </Menu>
        </Segment>
  )
}

export default Navbar

