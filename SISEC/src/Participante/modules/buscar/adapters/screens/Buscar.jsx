import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';

export default function Buscar() {
  const handleSearch = () => {
 
    console.log('Búsqueda realizada');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          placeholderTextColor="#aaa"
        />
        <Button
          title="Buscar"
          onPress={handleSearch}
          buttonStyle={styles.searchButton}
          titleStyle={styles.buttonText}
        />
      </View>


      <ScrollView style={styles.cardContainer}>
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://media.glamour.mx/photos/6190c91ff5ed039ceea8e4f7/master/w_1600,c_limit/155085.jpg´' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Diseño y Confección</Text>
            <Text style={styles.description}>Explora el emocionante mundo del diseño y la confección,
             donde la creatividad se 
            une con la técnica para dar vida a prendas únicas y expresivas que reflejan tu
             estilo y personalidad</Text>
          </View>
        </Card>


        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://addigital.mx/wp-content/uploads/2023/05/C-Photoshop.jpg' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>PhotoShop</Text>
            <Text style={styles.description}>Descubre el poder de la edición de imágenes 
            y la creatividad sin límites
             con Adobe Photoshop, la herramienta imprescindible para diseñadores,
              fotógrafos y artistas digitales.</Text>
          </View>
        </Card>



        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/D4E12AQFJ5tI8VWaxDw/article-cover_image-shrink_720_1280/0/1697205097634?e=2147483647&v=beta&t=yCHcayi2YFIJ2uk8lZqSQXWh7BWd87EPPN9TKJatjsc' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Diseño de Modas</Text>
            <Text style={styles.description}>Sumérgete en el fascinante mundo del 
            diseño de modas y explora la creatividad, la expresión personal y las
             tendencias de la industria.</Text>
          </View>
        </Card>
        
        
        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://www.gaceta.unam.mx/wp-content/uploads/2023/10/231009-com4-des-f1-Dise%C3%B1ado-por-la-CUAIEED.jpg' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>  Inteligencia Artificial</Text>
            <Text style={styles.description}>Descubre cómo la inteligencia artificial está 
            transformando el mundo moderno con innovación y eficiencia sin precedentes</Text>
          </View>
        </Card>
        


        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/08/aprender-gastronomia.jpg' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Gastronomia </Text>
            <Text style={styles.description}>En este curso, exploraremos los
             secretos detrás de los sabores exquisitos y las técnicas culinarias.
              Desde las bases fundamentales 
            hasta las recetas más innovadoras.</Text>
          </View>
        </Card>
        





        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://blog.tecmilenio.mx/hubfs/Ingeniera-industral-1.png' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Ingenieria Mecanica</Text>
            <Text style={styles.description}>En este curso, exploraremos los
             secretos detrás de los sabores exquisitos y las técnicas culinarias.
              Desde las bases fundamentales 
            hasta las recetas más innovadoras.</Text>
          </View>
        </Card>







        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://img.freepik.com/fotos-premium/hombre-negocios-contabilidad-costo-costo-economico-presupuesto-inversion-ahorro_18497-1064.jpg' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Gastronomia </Text>
            <Text style={styles.description}>En este curso, exploraremos los
             secretos detrás de los sabores exquisitos y las técnicas culinarias.
              Desde las bases fundamentales 
            hasta las recetas más innovadoras.</Text>
          </View>
        </Card>


        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://www.anahuac.mx/blog/sites/default/files/inline-images/17.png' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Terapia Fisica</Text>
            <Text style={styles.description}>En este curso, exploraremos los
             secretos detrás de los sabores exquisitos y las técnicas culinarias.
              Desde las bases fundamentales 
            hasta las recetas más innovadoras.</Text>
          </View>
        </Card>


        <Card containerStyle={styles.card}>
          <Image
            source={{ uri: 'https://quo.mx/wp-content/uploads/2023/03/avances-en-nanotecnologia-1.png' }}
            style={styles.image}
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>Nanotecnologia </Text>
            <Text style={styles.description}>En este curso, exploraremos los
             secretos detrás de los sabores exquisitos y las técnicas culinarias.
              Desde las bases fundamentales 
            hasta las recetas más innovadoras.</Text>
          </View>
        </Card>




        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#009475',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    marginBottom: 20,
  },
  image: {
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
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