 import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

export default function Calificar() {
  const [data, setData] = useState([
    { id: '1', name: 'Angela Aguilar', value: '', avatarUrl: 'https://pbs.twimg.com/profile_images/1410053881720152064/2ELnCcqd_400x400.jpg' },
    { id: '2', name: 'Jenni Juarez', value: '', avatarUrl: 'https://images.hola.com/imagenes/actualidad/20210711192831/carla-diaz-ariana-elite-nina-prodigio-actriz-del-momento/0-973-542/carla-diaz-ig-t.jpg' },
    { id: '3', name: 'Hugo Salazar', value: '', avatarUrl: 'https://www.billboard.com/wp-content/uploads/2022/03/joshua-bassett-better-nate-than-ever-2022-billboard-1548.jpg' },
    { id: '4', name: 'Angela Aguilar', value: '', avatarUrl: 'https://akamai.sscdn.co/uploadfile/letras/fotos/4/3/1/0/4310a267d7e9e9b5975278799a6074fd.jpg' },
    { id: '5', name: 'Jenni Juarez', value: '', avatarUrl: 'https://media.revistagq.com/photos/6579c55806bbb8ab827dfdbf/16:9/w_2560%2Cc_limit/IMG_0223.jpeg' },
    { id: '6', name: 'Hugo Salazar', value: '', avatarUrl: 'https://hips.hearstapps.com/hmg-prod/images/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg' },
    { id: '7', name: 'Angela Aguilar', value: '', avatarUrl: 'https://ntvb.tmsimg.com/assets/assets/795689_v9_bc.jpg' },
    { id: '8', name: 'Jenni Juarez', value: '', avatarUrl: 'https://image.europafm.com/clipping/cmsimages02/2024/01/03/0E08701B-8769-4FCA-9822-C9A6CE64EE3E/cantante-actriz-selena-gomez-octubre-2023_104.jpg?crop=3383,3383,x885,y0&width=1200&height=1200&optimize=low&format=webply' },
    { id: '9', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dtsNV0mjOPfsCAEBXDiyFIzDU5WPR79iRt1Vm3RAquv-8YNr_gcNNl7318JvvDJqIHI&usqp=CAU' },
  ]);

  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);

  const handleSavePress = () => {
    setShowConfirmationAlert(true);
  };

  const handleConfirmSave = () => {
    // Realizar acciones de guardar aquí
    // setData([...]); // Actualizar el estado si es necesario
    setShowConfirmationAlert(false);
  };

  const handleCancelSave = () => {
    setShowConfirmationAlert(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          parseInt(item.value) >= 8 ? styles.inputBlue : styles.inputRed,
          item.value === '' ? styles.inputEmpty : null
        ]}
        keyboardType="numeric"
        value={item.value}
        onChangeText={(text) => handleInputChange(text, item.id)}
        placeholderTextColor="white" // Establecer el color del texto de marcador de posición
        color="white" // Establecer el color del texto
      />
    </View>
  );

  const handleInputChange = (text, itemId) => {
    if (text === '' || (parseInt(text) >= 0 && parseInt(text) <= 10)) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === itemId ? { ...item, value: text } : item
        )
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.containerBackground}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
        <Text style={styles.saveButtonText}>Guardar Calificaciones</Text>
      </TouchableOpacity>

      {/* Ventana de alerta de confirmación de guardar */}
      {showConfirmationAlert && (
        <View style={styles.alertContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>¿Estás seguro de guardar las calificaciones?</Text>
            <View style={styles.alertButtons}>
              <TouchableOpacity style={[styles.alertButton, styles.confirmButton]} onPress={handleConfirmSave}>
                <Text style={styles.alertButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.alertButton, styles.cancelButton]} onPress={handleCancelSave}>
                <Text style={styles.alertButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3', // Color de fondo del contenedor
    padding: 20,
  },
  containerBackground: {
    backgroundColor: 'white', // Color de fondo del recuadro blanco
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15, // Aumenta el padding para hacer los elementos más grandes
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50, // Ajusta el tamaño del avatar
    height: 50, // Ajusta el tamaño del avatar
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  name: {
    fontSize: 14, // Ajusta el tamaño del texto del nombre
    fontWeight: 'bold', // Establece el peso del texto del nombre
  },
  input: {
     paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
    borderRadius: 10, // Agrega bordes redondeados
  },
  inputRed: {
    backgroundColor: '#FD3237',
  },
  inputBlue: {
    backgroundColor: '#518AB5',
  },
  inputEmpty: {
    backgroundColor: 'white',
  },
  saveButton: {
    backgroundColor: '#009475',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  alertContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  alertButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  alertButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#009475',
  },
  cancelButton: {
    backgroundColor: '#FD3237',
  },
  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
