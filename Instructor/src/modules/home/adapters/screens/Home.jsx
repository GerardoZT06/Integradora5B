import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
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

        {/* Aquí van las cuatro tarjetas adicionales */}
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
