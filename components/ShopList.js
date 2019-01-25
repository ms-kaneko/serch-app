import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Footer, Content, Card, CardItem, DatePicker, Form, Item ,Label, Input, H1, H2, H3} from 'native-base';


const ShopList = ({ shopInfo }) => {
  const { name, address, image_url, pr, id } = shopInfo;
  const { imageStyle, textStyle, wrapperStyle } = styles;
  return (
    <Card onPress={()=>navigate('Detail', { home: id })} title="Go to detail">
    <View style={{flex: 1, flexDirection: 'row'}}>
    <Image style={styles.store} source={{ uri:image_url['shop_image1']}} />
    <H1 style={styles.storename}>{name}</H1>
    </View>
    <H3>{address}</H3>
    <Text>{ pr['pr_short'] }</Text>
    </Card>
  )
}

const styles = {
  wrapperStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600"
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

}


export default ShopList;
