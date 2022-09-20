import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Card, Paragraph, Text} from 'react-native-paper';
import {BgSplash} from '../../assets';

const Splash = ({navigation}) => {
  const handlePress = () => {
    // navigation.navigate('Dashboard');
    navigation.replace('Dashboard');
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('Dashboard');
  //   }, 3000);
  // }, []);
  return (
    <View>
      <Image source={BgSplash} />
      <Card>
        <Card.Content>
          <Text style={style.title}>Be aware</Text>
          <Text style={style.title}>Stay Healthy</Text>
          <Paragraph style={style.paragraph}>
            Welcome to COVID-19 information portal
          </Paragraph>
          <Text onPress={handlePress} style={style.textNavigate}>
            GET STARTED
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
  },
  paragraph: {
    marginTop: 15,
    marginBottom: 50,
  },
  textNavigate: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 20,
  },
});
