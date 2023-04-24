import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';
//Pages
import Login from './pages/Login/Login';
import Inventory from './pages/Inventory/Inventory';
import DetailView from './pages/DetailView/DetailView';
import NewItem from './pages/NewItem/NewItem';

//Apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache()
});



export default function App() {
    const {Navigator, Screen} = createNativeStackNavigator(); 
    return(
      <ApolloProvider client={client}>
        <NavigationContainer initialRouteName='Inventory'>
          <Navigator>
            <Screen name='Inventory' component={Inventory}/>
            <Screen name='NewItem' component={NewItem}/>
            <Screen name='DetailView' component={DetailView}/>
            <Screen name='Login' component={Login}/>
          </Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
}
