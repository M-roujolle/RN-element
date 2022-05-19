import * as React from 'react';
import { Appbar, Card, Avatar, BottomNavigation, Provider as PaperProvider } from 'react-native-paper';
import MyComponent from './src/component/MyComponent';



const App = () => (

  <PaperProvider>

    <Appbar.Header>
      <Appbar.Content title="Activity" subtitle={'Tracker'} />
      <Avatar.Image size={40} source={require('./assets/img/photo-profil_301783868.jpg')} />
    </Appbar.Header>

    <MyComponent />

  </PaperProvider>

)

export default App

