import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';

export default function News() {
  const [data, setData] = useState([
    { id: '1', name: 'Angela Aguilar', value: '', avatarUrl: 'https://www.shutterstock.com/image-photo/smile-selfie-face-young-black-600nw-2346359905.jpg' },
    { id: '2', name: 'Jenni Juarez', value: '', avatarUrl: 'https://i.blogs.es/34e4f8/selfies---07/450_1000.jpg' },
    { id: '3', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-WgpexrLf8sq7Ssr7s7fl3bx5eLK49oG4w&usqp=CAU' },
    { id: '4', name: 'Angela Aguilar', value: '', avatarUrl: 'https://www.shutterstock.com/image-photo/smile-selfie-face-young-black-600nw-2346359905.jpg' },
    { id: '5', name: 'Jenni Juarez', value: '', avatarUrl: 'https://i.blogs.es/34e4f8/selfies---07/450_1000.jpg' },
    { id: '6', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-WgpexrLf8sq7Ssr7s7fl3bx5eLK49oG4w&usqp=CAU' },
    { id: '7', name: 'Angela Aguilar', value: '', avatarUrl: 'https://www.shutterstock.com/image-photo/smile-selfie-face-young-black-600nw-2346359905.jpg' },
    { id: '8', name: 'Jenni Juarez', value: '', avatarUrl: 'https://i.blogs.es/34e4f8/selfies---07/450_1000.jpg' },
    { id: '9', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-WgpexrLf8sq7Ssr7s7fl3bx5eLK49oG4w&usqp=CAU' },
    
    // Agrega más elementos si es necesario
  ]);

  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleDownloadPress = () => {
    setShowConfirmationDialog(true);
  };

  const handleConfirm = () => {
    // Limpiar los valores de los inputs
    setData(data.map(item => ({ ...item, value: '' })));
    setShowConfirmationDialog(false);
    setShowSuccessDialog(true);
  };

  const handleCancel = () => {
    setShowConfirmationDialog(false);
  };

  const handleSuccessOk = () => {
    setShowSuccessDialog(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, parseInt(item.value) >= 8 ? styles.buttonRed : styles.buttonBlue]}
        onPress={() => handleButtonPress(item.id)}
      >
        <Text style={styles.buttonText}>{parseInt(item.value) >= 8 ? 'Ausente' : 'Presente'}</Text>
      </TouchableOpacity>
    </View>
  );

  const handleButtonPress = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, value: parseInt(item.value) >= 8 ? '' : '10' } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPress}>
        <Text style={styles.downloadButtonText}>Descargar</Text>
      </TouchableOpacity>
      <View style={styles.containerBackground}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      {/* Confirmación del botón de Descargar */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showConfirmationDialog}
        onRequestClose={handleCancel}
      >
        <TouchableHighlight
          style={styles.modalBackground}
          activeOpacity={1}
          underlayColor="rgba(0, 0, 0, 0.5)"
          onPress={handleCancel}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¿Estás seguro?</Text>
              <View style={styles.modalButtons}>
                <TouchableHighlight
                  style={[styles.modalButton, styles.modalButtonYes]}
                  onPress={handleConfirm}
                  underlayColor="darkgreen"
                >
                  <Text style={styles.modalButtonText}>Sí</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={[styles.modalButton, styles.modalButtonNo]}
                  onPress={handleCancel}
                  underlayColor="darkred"
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>

      {/* Éxito al descargar */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSuccessDialog}
        onRequestClose={handleSuccessOk}
      >
        <TouchableHighlight
          style={styles.modalBackground}
          activeOpacity={1}
          underlayColor="rgba(0, 0, 0, 0.5)"
          onPress={handleSuccessOk}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Descarga completada</Text>
              <TouchableHighlight
                style={[styles.modalButton, styles.modalButtonOk]}
                onPress={handleSuccessOk}
                underlayColor="darkgreen"
              >
                <Text style={styles.modalButtonText}>Aceptar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3', // Color de fondo del contenedor
    padding: 20,
  },
  containerBackground: {
    marginTop: 10,
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
    fontSize: 18, // Ajusta el tamaño del texto del nombre
    fontWeight: 'bold', // Establece el peso del texto del nombre
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonBlue: {
    backgroundColor: 'blue',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end', // Alinea el botón a la derecha
    marginTop: 20,
  },
  downloadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'transparent',
    width: '80%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: '45%',
  },
  modalButtonYes: {
    backgroundColor: 'green',
  },
  modalButtonNo: {
    backgroundColor: 'red',
  },
  modalButtonOk: {
    backgroundColor: 'green',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
