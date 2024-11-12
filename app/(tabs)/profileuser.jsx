import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Profileuser = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image 
        source={{ uri: 'https://pbs.twimg.com/profile_images/1669302458575716352/NHw14rAU_400x400.jpg' }} 
        style={styles.profileImage}
      />

      {/* User Info */}
      <Text style={styles.userName}>Aliboy</Text>
      <Text style={styles.userEmail}>RobertMahinay@gmail.com</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d98971', // Same background as the other screens
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 3,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3e1905',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 18,
    color: '#3e1905',
    marginBottom: 30,
  },
  editButton: {
    backgroundColor: '#fda085',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  editButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#f55442',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Profileuser;
