import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Footer, Content, Card, CardItem, DatePicker, Form, Item ,Label, Input, H1, H2, H3} from 'native-base';
export default class GeneralExample extends Component {
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
        <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.store} source={require('./assets/shop.png')} />
        <H1 style={styles.storename}>店舗名</H1>
        </View>
        <H3>店舗住所</H3>
        <H2>店舗紹介</H2>
        </Card>

        <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.store} source={require('./assets/shop.png')} />
        <H1 style={styles.storename}>店舗名</H1>
        </View>
        <H3>店舗住所</H3>
        <H2>店舗紹介</H2>
        </Card>

        <Card>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Image style={styles.store} source={require('./assets/shop.png')} />
        <H1 style={styles.storename}>店舗名</H1>
        </View>
        <H3>店舗住所</H3>
        <H2>店舗紹介</H2>
        </Card>
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

});
