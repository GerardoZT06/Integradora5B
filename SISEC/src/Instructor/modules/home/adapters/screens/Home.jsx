import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get('window');

const images = [
  {
    id: 1,
    uri: "https://cultura-informatica.com/wp-content/uploads/2022/06/Photoshop-web-gratis-2.png"
  },
  {
    id: 2,
    uri: "https://www.uag.mx/contenido/R6CEW002gH/cuanto-dura-la-carrera-de-gastronomia_i3p.jpg"
  },
  {
    id: 3,
    uri: "https://veracruz.uo.edu.mx/sites/default/files/importancia-del-disen%CC%83o-gra%CC%81fico.jpeg"
  }
];

export default function Home() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.state.index < images.length - 1) {
        swiperRef.current.scrollBy(1, true);
      } else {
        swiperRef.current.scrollBy(-images.length + 1, true);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderSwiperItems = () => {
    return images.map((image) => (
      <View key={image.id} style={styles.slide}>
        <Image
          style={styles.image}
          source={{ uri: image.uri }}
        />
      </View>
    ));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Inicio</Text>
        <View style={styles.card}>
          <Swiper
            ref={swiperRef}
            style={styles.wrapper}
            showsPagination={true}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            paginationStyle={styles.pagination}
            loop={true}
          >
            {renderSwiperItems()}
          </Swiper>
        </View>
        {/* Primer card */}
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardImage}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/305/305100.png' }}
          />
          <Text style={styles.cardText}>Visualiza todos los participantes que están registrados correctamente.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Observar</Text>
          </TouchableOpacity>
        </View>
        {/* Segundo card */}
        <View style={styles.cardContainer}>
          <Image
            style={styles.cardImage2}
            source={{ uri: 'https://thumbs.dreamstime.com/b/icono-de-los-participantes-la-elecci%C3%B3n-elemento-las-muestras-y-s%C3%ADmbolos-se-pueden-utilizar-para-web-log-logotipo-app-m%C3%B3vil-ui-139759239.jpg' }}
          />
          <Text style={styles.cardText}>Descarga las listas de asistencia de los participantes</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Descargar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardContainer: {
    width: width * 0.9,
    marginTop: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: "center",
  },
  cardImage: {
    marginTop: 10,
    width: 100, // Ajusta el ancho de la imagen según sea necesario
    height: 100, // Ajusta el alto de la imagen según sea necesario
    resizeMode: "cover",
  },
  cardImage2: {
    marginTop: 0,
    width: 130, // Ajusta el ancho de la imagen según sea necesario
    height: 130, // Ajusta el alto de la imagen según sea necesario
    resizeMode: "cover",
  },





  
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center", // Para centrar el texto
   

  },
  button: {
    backgroundColor: "#009475",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom:20,
    paddingLeft:10,
    paddingRight:10
    
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal:30
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
