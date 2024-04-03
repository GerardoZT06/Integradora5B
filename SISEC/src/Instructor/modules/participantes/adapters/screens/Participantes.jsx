import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

export default function News() {
  const [data, setData] = useState([
    { id: '1', name: 'Angela Aguilar', value: '', avatarUrl: 'https://pbs.twimg.com/profile_images/1410053881720152064/2ELnCcqd_400x400.jpg' },
    { id: '2', name: 'Luis Fernandez', value: '', avatarUrl: 'https://www.billboard.com/wp-content/uploads/2022/03/joshua-bassett-better-nate-than-ever-2022-billboard-1548.jpg' },
    { id: '3', name: 'Eduard Sanches', value: '', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/1200px-Ed_Sheeran-6886_%28cropped%29.jpg' },
    { id: '4', name: 'Angela Aguilar', value: '', avatarUrl: 'https://www.refinery29.com/images/10225414.jpg?format=webp&width=720&height=864&quality=85' },
    { id: '5', name: 'Jenni Juarez', value: '', avatarUrl: 'https://plus.cusica.com/wp-content/uploads/2016/09/calvin-harris-cusica-plus-1.jpg' },
    { id: '6', name: 'Sabrina Calderon', value: '', avatarUrl: 'https://akamai.sscdn.co/uploadfile/letras/fotos/4/3/1/0/4310a267d7e9e9b5975278799a6074fd.jpg' },
    { id: '7', name: 'Angela Aguilar', value: '', avatarUrl: 'https://hips.hearstapps.com/hmg-prod/images/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg' },
    { id: '8', name: 'Jenni Juarez', value: '', avatarUrl: 'https://hips.hearstapps.com/hmg-prod/images/millie-bobby-brown-1645024505.jpg?crop=0.670xw:1.00xh;0.139xw,0&resize=640:*' },
    { id: '9', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr41zwNZcL-Q5DZXjCASO46Fh7uYtlCBXZlg&usqp=CAU' },
    { id: '10', name: 'Angela Aguilar', value: '', avatarUrl: 'https://1883magazine.com/wp-content/uploads/2020/09/1883_Magazine_Louis_Partridge_5-scaled.jpg' },
    { id: '11', name: 'Jenni Juarez', value: '', avatarUrl: 'https://images.mubicdn.net/images/cast_member/560603/cache-281592-1565498018/image-w856.jpg?size=800x' },
    { id: '12', name: 'Hugo Salazar', value: '', avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2023/08/Noah-Schnapp-Coming-Out.jpg?w=1581&h=1054&crop=1' },
    { id: '13', name: 'Hugo Salazar', value: '', avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_J8TfQPwZoSac_KzRYhXMa7d9dvWGs5lAw&usqp=CAU' },

  
  
  
  
  
  ]);

  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  const handleDownloadPress = () => {
    setShowDownloadAlert(true);
  };

  const handleConfirmDownload = () => {
    setShowDownloadAlert(false);
    // Realizar acciones de descarga aquí
    // setData([...]); // Actualizar el estado si es necesario
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
        <Text style={[styles.buttonText, parseInt(item.value) >= 8 ? styles.buttonTextRed : null]}>
          {parseInt(item.value) >= 8 ? 'Ausente' : 'Presente'}
        </Text>
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
      <View style={styles.containerBackground}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      
      {/* Botón de Descargar */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPress}>
        <Text style={styles.downloadButtonText}>Descargar</Text>
      </TouchableOpacity>

      {/* Ventana de alerta de descarga */}
      {showDownloadAlert && (
        <View style={styles.alertContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>¿Estás seguro de descargar?</Text>
            <View style={styles.alertButtons}>
              <TouchableOpacity style={styles.alertButton} onPress={handleConfirmDownload}>
                <Text style={styles.alertButtonText}>Sí</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.alertButton, { backgroundColor: '#FD3237' }]} onPress={() => setShowDownloadAlert(false)}>
                <Text style={styles.alertButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
    fontSize: 16, // Cambia el tamaño de la fuente a 16
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
    paddingHorizontal:12

  },
  buttonTextRed: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal:12
  },
  downloadButton: {
    backgroundColor: '#009475',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center', // Centra el contenido horizontalmente
    alignSelf: 'center', // Centra el botón en el centro horizontal de su contenedor
    marginTop: 20,
    color: 'white', // Color del texto del botón
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
    backgroundColor: '#009475',
  },
  downloadButtonText:{
color:'#fff'
  },


  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
