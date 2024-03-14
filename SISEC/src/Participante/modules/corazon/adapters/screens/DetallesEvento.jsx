import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CorazonStack from '../../../../config/stack/CorazonStack';


const DetallesEvento = () => {
  const navigation = useNavigation();
  const navigateToPantallaEjemplo = () => {
    navigation.navigate('CorazonStack', { screen: 'PantallaEjemplo'});
    };
  return (
    <ScrollView>
<View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('./../../../../../../assets/img/curso-excel.jpg')} // Reemplaza con la ruta de tu imagen
          style={styles.image}
        />
        <Text style={styles.title}>Curso Excel</Text>
        <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Capacidad mínima: 20 personas</Text>
        <Text style={styles.detailText}>Fecha de inicio: 01 de Febrero 2024</Text>
        <Text style={styles.detailText}>Fecha de término: 10 de Febrero 2024</Text>
        <Text style={styles.detailText}>Estado: Disponible</Text>
        <Text style={styles.detailText}>Modalidad: Virtual</Text>
        <Text style={styles.detailText}>Instructor: Giovanni Velázquez Avilés</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Temario:</Text>
        <Text style={styles.sectionText}>- Formulas y indexación.</Text>
        <Text style={styles.sectionText}>- Historia y evolución de excel.</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Horario:</Text>
        <Text style={styles.sectionText}>- Lunes: 13:00-14:00</Text>
        <Text style={styles.sectionText}>- Martes: 10:00-11:30</Text>
        <Text style={styles.sectionText}>- Miércoles: 8:00-9:30</Text>
        <Text style={styles.sectionText}>- Jueves: 11:00-12:30</Text>
        <Text style={styles.sectionText}>- Viernes: 15:00-16:30</Text>
      </View>
        <Button title="Inscribirse" onPress={navigateToPantallaEjemplo} color="#008F71" />
      </View>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fondo blanco
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Centrar contenido
  },
  image: {
    width: 200, // Ajusta el tamaño de la imagen según tus necesidades
    height: 200, // Ajusta el tamaño de la imagen según tus necesidades
    resizeMode: 'cover',
  },
  title: {
    marginTop: 12,
    fontSize: 24, // Tamaño del título
    fontWeight: 'bold', // Texto en negrita
    marginBottom: 10,
  },
  text: {
    fontSize: 18, // Tamaño del texto
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default DetallesEvento;

