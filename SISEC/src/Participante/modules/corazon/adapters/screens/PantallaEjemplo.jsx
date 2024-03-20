 import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PantallaEjemplo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscribirse</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellido:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su apellido"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dónde estudia:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su lugar de estudio"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>¿Es alumno de la UTEZ? (si/no):</Text>
        <View style={styles.radioButtonContainer}>
          <Button title="Sí" onPress={() => {}} />
          <Button title="No" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
        />
      </View>
      <Button
        title="Enviar"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default PantallaEjemplo;
