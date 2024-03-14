import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CorazonStack from '../../../../config/stack/CorazonStack';

export default function Corazon() {
  const image1 = require('./../../../../../../assets/img/curso-excel.jpg');
  const image2 = require('./../../../../../../assets/img/cursomongo.jpg');
  const image3 = require('./../../../../../../assets/img/iot.png');

  const navigation = useNavigation();

  const navigateToDetalles = () => {
  navigation.navigate('CorazonStack', { screen: 'DetallesEvento'});

  };
  
  const navigateToParticipante = () => {
    navigation.navigate('CorazonStack', { screen: 'Participantes' });
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image1}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
          <Button
            title="Detalles"
            onPress={navigateToDetalles}
            buttonStyle={[styles.greenButton, styles.button]}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Participantes"
            onPress={navigateToParticipante}
            buttonStyle={[styles.greenButton, styles.button]}
            titleStyle={styles.buttonText}
          />
             <View style={styles.icon}>
          <Icon name="heart" size={20} color="red" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="black" style={styles.icon} />
          </View>
          </View>

        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image2}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Detalles"
              buttonStyle={[styles.greenButton, styles.button]}
              titleStyle={styles.buttonText} // Establecer estilo para el texto del botón
            />
            <Button
              title="Participantes"
              buttonStyle={[styles.greenButton, styles.button]}
              titleStyle={styles.buttonText} // Establecer estilo para el texto del botón
            />
           <View style={styles.icon}>
          <Icon name="heart" size={20} color="red" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="black" style={styles.icon} />
          </View>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image3}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Detalles"
              buttonStyle={[styles.greenButton, styles.button]}
              titleStyle={styles.buttonText} // Establecer estilo para el texto del botón
            />
            <Button
              title="Participantes"
              buttonStyle={[styles.greenButton, styles.button]}
              titleStyle={styles.buttonText} // Establecer estilo para el texto del botón
            />
           <View style={styles.icon}>
          <Icon name="heart" size={20} color="red" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="black" style={styles.icon} />
          </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '80%',
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 100,
    resizeMode: 'cover',
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10,
  },
  greenButton: {
    backgroundColor: '#009475',
    marginBottom: 10,
  },
  button: {
    width: 110,
  },
  buttonText: {
    fontSize: 12, // Tamaño de la letra del botón
  },
  icon: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginStart: 'auto',
    marginEnd: 12,
  },
});
