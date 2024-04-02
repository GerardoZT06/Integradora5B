import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Button, Image, Card } from 'react-native-elements';

const data = [
  { id: 1, imageUrl: 'https://miro.medium.com/v2/resize:fit:2000/1*Exy_X0LPWBEfUobbYAqdHQ.png', title: 'React Native' },
  { id: 2, imageUrl: 'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-es-javascript-descubre-sus-5-principales-usos.jpg', title: 'Java Script' },
  // Agrega más datos según sea necesario
];

const Eventos = () => {
  const renderItem = ({ item }) => (
    <Card containerStyle={styles.cardContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.contentContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />
        <View style={styles.buttonContainer}>
          <Button title="Detalles" onPress={() => console.log(`Detalles de ${item.title}`)} buttonStyle={styles.button} />
          <Button title="Participantes" onPress={() => console.log(`Participantes de ${item.title}`)} buttonStyle={styles.button} />
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    borderRadius: 0,
    marginHorizontal: 0, // Elimina el margen horizontal para ocupar todo el ancho de la pantalla
    width: width, // Establece el ancho de la tarjeta igual al ancho de la pantalla
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 220,// Esto permite que la imagen ocupe la mitad del ancho de la tarjeta
    marginRight: 20,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#009475',
    marginBottom: 11,
  },
});

export default Eventos;
