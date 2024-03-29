import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Usuario 1', photo: require('./../../../../../../assets/img/profile1.png'), active: true },
  { id: '2', name: 'Usuario 2', photo: require('./../../../../../../assets/img/profile2.png'), active: true },
  { id: '3', name: 'Usuario 3', photo: require('./../../../../../../assets/img/profile1.png'), active: true },
  { id: '4', name: 'Usuario 4', photo: require('./../../../../../../assets/img/profile2.png'), active: true },
];

const ParticipanteCard = ({ id, name, photo, active }) => {
  return (
    <View style={[styles.card, { backgroundColor: 'white' }]}>
      <Image source={photo} style={styles.participantePhoto} />
      <View style={styles.cardContent}>
        <Text>{name}</Text>
        <TouchableOpacity
          style={[
            styles.statusButton,
            { backgroundColor: active ? 'blue' : 'red' },
          ]}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {active ? 'Activo' : 'Inactivo'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Participantes = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ParticipanteCard {...item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  participantePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusButton: {
    width: 80,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Participantes;
