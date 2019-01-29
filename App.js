import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Footer, Content, Card, CardItem, DatePicker, Form, Item ,Label, Input, H1, H2, H3} from 'native-base';
import { StackNavigator, createStackNavigator , createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
// You can import from local files
import ShopList from './components/ShopList';
import axios from 'axios';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = {
    shops: []
  };
  constructor(props){
   super(props);
   this.state = { store_id: '' };
 };

  componentWillMount() {
    axios.get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=419c281b24c712e12356fce401f4bdfb&pref=PREF13')
         .then(res => {
           this.setState({ shops: res.data.rest });
         });
  };
  renderShops() {
      return this.state.shops.map(data => {
        return <ShopList  key={data.id} shopInfo={data} />
      });
    }

  render() {
    return (
      <Container style={styles.container}>

        <Content style={styles.content}>



        <Form>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Item style={styles.disp_half}>
            <Input placeholder="地名" />
          </Item>
          <Item last style={styles.disp_half}>
            <Input placeholder="フリーワード" />
          </Item>
        </View>
        </Form>

          <Button style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{width: "100%"}}>
              検索
          </Text>
          </Button>

      <ScrollView>

          {this.renderShops()}

      </ScrollView>

        </Content>

        <Footer style={styles.footer}>
        <Button style={styles.disp_half}>
          <Text style={{justifyContent:'center',flexDirection:'row'}}>
            一覧
        </Text>
        </Button>
        <Button style={styles.disp_half}>
          <Text style={{justifyContent:'center',flexDirection:'row'}}>
            お気に入り
        </Text>
        </Button>
        </Footer>
      </Container>

    );
  }
}

class Detail extends React.Component {
  render(){
    return (
      <View>
        <Text>PARAM: </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 30,
  },
  header: {
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    alignItems: "center",
    justifyContent: "center"
  },
  store: {
    resizeMode:'contain',
        alignItems: "flex-start",
        flex: 1,
  },
  storename: {
    width: "50%",
    alignItems: "flex-end",
    flex: 1,
  },
  disp_half: {
        width: "50%",
        flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

const Stack = createStackNavigator(
  {
  HomeScreen: { screen: Home },
  DetailScreen: { screen: Detail },
  },
  {
  initialRouteName: 'HomeScreen'
  }
);

const AppContainer = createAppContainer(Stack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          thsi.navigator = nav;
        }}
      />
    );
  }
}
