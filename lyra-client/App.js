
import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
//import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
//import { TabNavigator } from 'react-navigation';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import Map from "./src/components/map/Map";
import List from "./src/components/list/List";
import ListMy from "./src/components/myList/ListMy";
import { Container, Header, Content, Footer, FooterTab,  Left, Body, Right, Title, Icon, Button   } from 'native-base';

const Navigator = StackNavigator({

  Main:{
    screen: HomeScreen
  }
});
const DrNv = DrawerNavigator({
HomeScreen:{screen:Navigator}
});
export default class App extends Component {

  render() {

    return (<DrNv />

    //  <Navigator>

  //    </Navigator>

    );

  }
}

/*export default class App extends Component {

  render() {
   return (
     <Container>

     <Header>
       <Left>
         <Button transparent >
           <Icon name='menu'  />
         </Button>
       </Left>
         <Body>
           <Title>Map of records</Title>
         </Body>
       </Header>
       <MyApp />
      </Container>
       <Footer>
         <FooterTab>
           <Button onPress={() => HomeScreen}>
             <Text>Map</Text>
           </Button>
           <Button>
             <Text>List</Text>
           </Button>
           <Button >
             <Text>My records</Text>
           </Button>
         </FooterTab>
       </Footer>
    // </Container>
   );
 }
}
/*
const CustomDrawerContentComponent = (props) => (
  <Container>
        <Header style={{ height: 1000}}>
          <Content>
            <Form>
              <Item>
                <Input placeholder="Username" />
              </Item>
              <Item last>
                <Input placeholder="Password" />
              </Item>
            </Form>
          </Content>
        </Header>
      </Container>
)
const MainNavigator = TabNavigator({
HomeTab: {
  screen: ListMy
}
});
const MyApp = DrawerNavigator({

  Register: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  },
  Map: {
    screen: Map
  },
  List: {
    screen: List
  },
  ListMy: {
    screen: ListMy

}
},
{
    initialRouteName:'Register',
    contentComonent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    draweCloseRoute:'DrawerClose',
    drawertoggleRoute:'DrawerToggle'
  }
)
*/