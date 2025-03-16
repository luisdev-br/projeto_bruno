import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import CarItem from '../components/CarItem';

const cars = [
  { id: '1', name: 'Honda Civic 2019', image: require('../assets/car1.jpg'), price: 85000 },
  { id: '2', name: 'Toyota Corolla 2020', image: require('../assets/car2.jpg'), price: 90000 },
  { id: '3', name: 'Ford KA 2013', image: require('../assets/car3.jpg'), price: 70000 },
  { id: '4', name: 'Porsche 911 Carrera', image: require('../assets/car4.jpg'), price: 60000 },
  { id: '5', name: 'VW Fusca 1990', image: require('../assets/car5.jpg'), price: 40000 },
  { id: '6', name: 'VW Gol 2010', image: require('../assets/car6.jpg'), price: 30000 },
];

const HomeScreen = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (carro) => {
    setCarrinho([...carrinho, carro]);
  };

  const finalizarCompra = () => {
    alert('Compra finalizada com sucesso!');
    setCarrinho([]); // Limpa o carrinho após a compra
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros Disponíveis</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarItem car={item} onAddToCart={adicionarAoCarrinho} />
        )}
      />
      <Button
        title={`Ver Carrinho (${carrinho.length})`}
        onPress={() => navigation.navigate('Carrinho', { carrinho })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#6a1b9a',
  },
});

export default HomeScreen;
