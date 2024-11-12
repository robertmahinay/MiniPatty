import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Menu = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={{uri: 'https://your-logo-url.com/logo.png'}} 
        style={styles.logo}
      />

      {/* Menu Title */}
      <Text style={styles.menuTitle}>Burgers Menu</Text>

      {/* Menu Items */}
      <View style={styles.menuItem}>
        <Image 
          source={{uri: 'https://queen.jollibee.com.ph/2022/01/Yumburger-Solo.png'}} 
          style={styles.menuImage} 
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>Regular</Text>
          <Text style={styles.itemPrice}>$ 5</Text>
        </View>
      </View>

      <View style={styles.menuItem}>
        <Image 
          source={{uri: 'https://img.livestrong.com/-/photos.demandstudios.com/getty/article/117/233/57576173.jpg'}} 
          style={styles.menuImage} 
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>Medium</Text>
          <Text style={styles.itemPrice}>$ 10</Text>
        </View>
      </View>

      <View style={styles.menuItem}>
        <Image 
          source={{uri: 'https://www.closetcooking.com/wp-content/uploads/2013/04/Bacon-Double-Cheeseburger-Grilled-Cheese-500-1331.jpg'}} 
          style={styles.menuImage} 
        />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>Sandwich Burger</Text>
          <Text style={styles.itemPrice}>$ 8</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d98971', // Matches the gradient-like background color
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3e1905', // Dark color similar to your image
    textAlign: 'center',
    marginBottom: 30,
    borderBottomWidth: 3, // Adding an underline
    borderBottomColor: '#000', // Black underline
    paddingBottom: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  menuImage: {
    width: 80,
    height: 80,
    borderRadius: 10, // Rounded image corners
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e1905', // Dark color to match the theme
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3e1905', // Consistent text color
  },
});

export default Menu;
