import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Perfil() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://www.hollywoodreporter.com/wp-content/uploads/2020/09/Vanessa_kirby0280-1598980978.jpg?w=1296&h=730&crop=1&resize=681%2C383' }} style={styles.profileImage} />
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
});