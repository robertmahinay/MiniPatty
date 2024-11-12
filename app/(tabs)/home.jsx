import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={{uri: 'https://static.vecteezy.com/system/resources/previews/008/659/365/non_2x/mini-burger-logo-free-vector.jpg'}} 
        style={styles.logo}
      />

      {/* Menu Title */}
      <Text style={styles.menuTitle}>Select Menu</Text>

      {/* Menu Options */}
      <View style={styles.menuOptions}>
        {/* Burgers Option */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.imageContainer}>
            <Image 
              source={{uri: 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg'}} 
              style={styles.menuImage} 
            />
          </View>
          <Text style={styles.menuText}>Burgers</Text>
        </TouchableOpacity>

        {/* Burger & Drinks Option */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.imageContainer}>
            <Image 
              source={{uri: 'https://i.pinimg.com/originals/63/c2/ed/63c2edfdce5c6d898a3a199e312d6daf.png'}} 
              style={styles.menuImage} 
            />
          </View>
          <Text style={styles.menuText}>Burger & Drinks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d98971', // Gradient-like background color
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, // Rounded logo
    borderWidth: 2, 
    borderColor: '#fff', // White border around the logo
  },
  menuTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3e1905', // Dark color similar to your image
    marginBottom: 40,
  },
  menuOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  menuItem: {
    alignItems: 'center',
    width: '45%', // Ensures the buttons are evenly spaced
    backgroundColor: '#fff',
    borderRadius: 10, // Rounded corners for each menu item
    padding: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 10, // Rounded image corners
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3e1905',
  },
});

export default Home;
