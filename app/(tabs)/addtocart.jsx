import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // For icons

const Addtocart = () => {
  return (
    <View style={styles.container}>
      {/* Cart Title */}
      <Text style={styles.cartTitle}>Your Cart</Text>

      {/* Cart Item */}
      <View style={styles.cartItem}>
        <Image 
          source={{ uri: 'https://queen.jollibee.com.ph/2022/01/Yumburger-Solo.png' }} 
          style={styles.itemImage} 
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemText}>Regular Burger</Text>
          <Text style={styles.itemPrice}>$5</Text>
        </View>
        
        {/* Quantity Selector */}
        <View style={styles.quantityControl}>
          <TouchableOpacity style={styles.qtyButton}>
            <Ionicons name="remove-circle-outline" size={30} color="#3e1905" />
          </TouchableOpacity>
          <Text style={styles.qtyText}>1</Text>
          <TouchableOpacity style={styles.qtyButton}>
            <Ionicons name="add-circle-outline" size={30} color="#3e1905" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Subtotal Section */}
      <View style={styles.subtotalSection}>
        <Text style={styles.subtotalText}>Subtotal:</Text>
        <Text style={styles.subtotalAmount}>$5</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d98971', // Matches the background color from previous screens
    padding: 20,
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3e1905',
    textAlign: 'center',
    marginBottom: 30,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e1905',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3e1905',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    marginHorizontal: 5,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3e1905',
  },
  subtotalSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  subtotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e1905',
  },
  subtotalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e1905',
  },
  checkoutButton: {
    backgroundColor: '#fda085',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Addtocart;
