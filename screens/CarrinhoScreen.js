import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';

const CarrinhoScreen = ({ route, navigation }) => {
  const { carrinho } = route.params;

 
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.price, 0);
  };

  
  const finalizarCompra = () => {
    Alert.alert(
      'Compra Finalizada',
      'Sua compra foi finalizada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'), // Volta para a tela inicial
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

      {}
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toLocaleString('pt-BR')}</Text>
          </View>
        )}
      />

      {}
      <Text style={styles.total}>Total: R$ {calcularTotal().toLocaleString('pt-BR')}</Text>

      {}
      <Button title="Finalizar Compra" onPress={finalizarCompra} />
    </View>
  );
};

// Estilos
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
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#6a1b9a',
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginVertical: 16,
    color: '#6a1b9a',
  },
});

export default CarrinhoScreen;
