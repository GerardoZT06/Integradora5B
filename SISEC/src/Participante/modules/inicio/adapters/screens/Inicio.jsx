import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { Card } from 'react-native-elements';

const { width } = Dimensions.get('window');

export default function Inicio() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Inicio</Text>
        <View style={styles.card}>
          <Swiper
            style={styles.wrapper}
            showsPagination={true}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
            paginationStyle={styles.pagination}
            loop={true}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
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
                  uri: "https://veracruz.uo.edu.mx/sites/default/files/importancia-del-disen%CC%83o-gra%CC%81fico.jpeg"
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

        {/* Aquí van las cuatro tarjetas adicionales */}
        <ScrollView style={styles.cardContainer}>
          <Card containerStyle={styles.card}>
            <Image
              source={{ uri: 'https://media.glamour.mx/photos/6190c91ff5ed039ceea8e4f7/master/w_1600,c_limit/155085.jpg´' }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Diseño y Confección</Text>
              <Text style={styles.description}>Explora el emocionante mundo del diseño y la confección, donde la creatividad se une con la técnica para dar vida a prendas únicas y expresivas que reflejan tu estilo y personalidad</Text>
            </View>
          </Card>

          <Card containerStyle={styles.card}>
            <Image
              source={{ uri: 'https://addigital.mx/wp-content/uploads/2023/05/C-Photoshop.jpg' }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>PhotoShop</Text>
              <Text style={styles.description}>Descubre el poder de la edición de imágenes y la creatividad sin límites con Adobe Photoshop, la herramienta imprescindible para diseñadores, fotógrafos y artistas digitales.</Text>
            </View>
          </Card>

          <Card containerStyle={styles.card}>
            <Image
              source={{ uri: 'https://www.anahuac.mx/blog/sites/default/files/inline-images/17.png' }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Terapia Física</Text>
              <Text style={styles.description}>Explora los secretos detrás de los sabores exquisitos y las técnicas culinarias. Desde las bases fundamentales hasta las recetas más innovadoras.</Text>
            </View>
          </Card>

          <Card containerStyle={styles.card}>
            <Image
              source={{ uri: 'URL_DE_LA_IMAGEN' }} // Aquí coloca la URL de la imagen
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>Título de la Cuarta Tarjeta</Text>
              <Text style={styles.description}>Descripción de la cuarta tarjeta</Text>
            </View>
          </Card>
        </ScrollView>
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
  wrapper: {},
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
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
