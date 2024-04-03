import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function Perfil() {
  const [profileImage, setProfileImage] = useState('https://www.hollywoodreporter.com/wp-content/uploads/2020/09/Vanessa_kirby0280-1598980978.jpg?w=1296&h=730&crop=1&resize=681%2C383');

  const handleChooseProfileImage = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permiso de acceso a la galería',
          message: 'La aplicación necesita acceso a tu galería de imágenes para cambiar la foto de perfil.',
          buttonNeutral: 'Preguntar después',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permiso denegado', 'No se puede cambiar la foto de perfil sin permiso para acceder a la galería.');
        return;
      }
    }

    const options = {
      title: 'Selecciona una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.error) {
        console.log('Error al seleccionar imagen: ', response.error);
        Alert.alert('Error', 'Ocurrió un error al seleccionar la imagen.');
      } else if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else {
        setProfileImage(response.uri);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChooseProfileImage} style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Cambiar foto de perfil</Text>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <View style={styles.userInfoRow}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={[styles.input]} />
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.label}>Apellido:</Text>
            <TextInput style={[styles.input]} />
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.label}>Correo:</Text>
            <TextInput style={[styles.input]} />
          </View>
          <View style={styles.userInfoRow}>
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput style={[styles.input]} secureTextEntry={true} />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonTextSesion}>Cerrar Sesión</Text>
      </TouchableOpacity>
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
  profileImageContainer: {
    borderRadius: 160,
    overflow: 'hidden',
  },
  profileImage: {
    width: 220,
    height: 220,
    borderRadius: 160,
    marginBottom: 20,
  },
  changePhotoButton: {
    marginTop: 10,
    marginBottom:15
  },
  changePhotoButtonText: {
    color: '#009688',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginVertical:5
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButtonTextSesion: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
   }
});
