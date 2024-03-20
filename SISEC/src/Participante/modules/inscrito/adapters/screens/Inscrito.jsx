import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para acceder al objeto de navegación
import { Card } from 'react-native-elements'; // Importa Card de react-native-elements

export default function Perfil() {
  const navigation = useNavigation(); // Inicializa el objeto de navegación

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleEdit = () => {
    if (!nombre || !apellido || !correo || !contrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!validateEmail(correo)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido');
      return;
    }

    console.log('Perfil editado');
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        {/* Aquí va el contenido del perfil */}
      </View>
      {/* Agrega las tres tarjetas (cards) aquí */}
      <ScrollView style={styles.cardContainer}>
        {/* Primera tarjeta */}
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://arw-18.com/wp-content/uploads/2020/06/Dise%C3%B1o-sin-t%C3%ADtulo26.jpg' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Pendiente de Pago</Text>
            <Text style={styles.description}>Aquí se muestran todos los cursos que tienes pedientes por pagar,
No puedes dar inicio al curso hasta que este este pagado.</Text>
          </View>
        </Card>


        {/* Segunda tarjeta */}
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://img.freepik.com/vector-premium/reclutamiento-personalpresentacion-curriculum-cursando-cuestionario-busqueda-electronica-personal_253334-2066.jpg' }}
            style={styles.image2}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Cursando </Text>
            <Text style={styles.description}>Aquí se muestran todos los cursos que estás cursando actualmente.</Text>
            
          </View>
        </Card>
        {/* Tercera tarjeta */}
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://cala.academy/wp-content/uploads/2019/02/8fe77e37002fbd3dd783c540c3740b27.png' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Finalizados</Text>
            <Text style={styles.description}>Todos los curso que ya están terminados los puedes encontrar justo aquí.</Text>
          </View>
        </Card>
      </ScrollView>
   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 160,
    marginBottom: 20,
  },
  userInfoContainer: {
    width: '80%',
  },
  userInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    width: 100,
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  editButton: {
    backgroundColor: '#009688',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    marginBottom: 20,
    
  },
  
  image: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center', 
  },

  image2: {
    height: 159,
    width: 290,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center', 
  },

  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center', 
  },
  description: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'center', 
  },
});