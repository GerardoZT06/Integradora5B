import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get('window');

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>
      <View style={styles.card}>
        <Swiper
          style={styles.wrapper}
          showsPagination={true} // Activar la paginación
          dotStyle={styles.dot} // Establecer el estilo para los puntos de paginación
          activeDotStyle={styles.activeDot} // Establecer el estilo para el punto de paginación activo
          paginationStyle={styles.pagination} // Establecer el estilo para el contenedor de paginación
          loop={true} // Permite que el carrusel se deslice infinitamente
          nextButton={<Text style={styles.buttonText}>›</Text>} // Agrega botón de siguiente
          prevButton={<Text style={styles.buttonText}>‹</Text>} // Agrega botón de anterior
        >

        
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: "https://cultura-informatica.com/wp-content/uploads/2022/06/Photoshop-web-gratis-2.png"
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: "https://www.uag.mx/contenido/R6CEW002gH/cuanto-dura-la-carrera-de-gastronomia_i3p.jpg"
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: "https://veracr]uz.uo.edu.mx/sites/default/files/importancia-del-disen%CC%83o-gra%CC%81fico.jpeg"
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: "https://m.media-amazon.com/images/I/819do3pEF6L._AC_UF894,1000_QL80_.jpg"  
              }}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={{
                uri: "https://gaceta.cch.unam.mx/sites/default/files/styles/imagen_articulos_1920x1080/public/2023-08/pag_26a.jpg?h=b69e0e0e&itok=JLYzGKfn"  
              }}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 60
  },
  card: {
    width: width * 0.9,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  buttonText: {
    fontSize: 50,
    color: '#007AFF'
  },
  pagination: {
    bottom: 10
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  }
});




 



