import React, { useState } from 'react';
import Login from './pages/Login/Login';
import SideMenu from 'react-native-side-menu';
import { View, Text, TouchableOpacity } from 'react-native';
import BurgerMenu from './components/burgerMenu/BurgerMenu';


export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
      setMenuOpen(!menuOpen);
    };

    return(
      <View>
        <TouchableOpacity onPress={toggleMenu}>
          <Text>Open Menu</Text>
        </TouchableOpacity>

        <SideMenu
          menu={<BurgerMenu/>}
          isOpen={menuOpen}
          onChange={(isOpen) => setMenuOpen(isOpen)}
        >

        </SideMenu>
      </View>
    );
}
