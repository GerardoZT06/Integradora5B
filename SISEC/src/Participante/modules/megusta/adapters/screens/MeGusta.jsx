import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CorazonStack from '../../../../config/stack/CorazonStack';

export default function Corazon() {
  const image1 = { uri: 'https://landing.grupobusiness.it/hubfs/EXCEL%20AVANZADO.webp' };
  const image2 = { uri: 'https://facialix.com/wp-content/uploads/2024/02/java-desde-cero-curso-gratis.jpg' };
  const image3 = { uri: 'https://www.aprender21.com/images/colaboradores/sql.jpeg' };
  const image4 = { uri: 'https://www.nplus-net.jp/knowledge/img/2303AWSnimteimain.jpg' };
  const image5 = { uri: 'https://www.fixedbuffer.com/wp-content/uploads/2020/03/welcome.png' };
  const image6 = { uri: 'https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg' };
  const image7 = { uri: 'https://api.cursos-dev.com/images/node.jpg' };
  const image8 = { uri: 'https://blog.desafiolatam.com/wp-content/uploads/2023/10/Cursos-gratis-de-Oracle.jpg' };
  const image9 = { uri: 'https://asociacionaepi.es/wp-content/uploads/2022/10/javascript-banner.jpeg' };
  const image10 = { uri: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/11/o-que-e-o-spring.png' };

  const navigation = useNavigation();

  const navigateToDetalles = () => {
    navigation.navigate('CorazonStack', { screen: 'DetallesEvento'});
  };
  
  const navigateToParticipante = () => {
    navigation.navigate('CorazonStack', { screen: 'Participantes' });
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
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
            <View style={styles.iconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
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
            <View style={styles.iconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
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
            <View style={styles.iconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image4}
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
            <View style={styles.iconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image5}
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
            <View style={styles.iconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image6}
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
            <View style={styles.iconContainer}>
              <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>
 <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image7}
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
          <View style={styles.iconContainer}>
              <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>
 <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image8}
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
         <View style={styles.iconContainer}>
              <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image9}
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
           <View style={styles.iconContainer}>
              <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={image10}
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
            <View style={styles.iconContainer}>
              <Icon name="heart" size={20} color="black" style={styles.icon} />
              <Icon name="thumbs-up" size={20} color="blue" style={styles.icon} />
            </View>
            </View>         
          </View>
        </View>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '95%',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    },
  image: {
    height: 120,
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
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,  
  },
  icon: {
    marginHorizontal: 10,  
  },
});
