import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Patty</Text>

      <View style={styles.buttonContainer}>
        <Link href="./Signup" style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Link>
        <Link href="./login" style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </Link>
        <Link href="/home" className= "text-3x1 font-TRBalloon"> Go to profile</Link>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5733)', // Light background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40, // Larger font size for title
    fontWeight: 'bold',
    color: '#333', // Darker color for contrast
    marginBottom: 50, // Space between title and buttons
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF5733', // Bright color for buttons
    paddingVertical: 15, // More padding for a larger button
    paddingHorizontal: 40,
    borderRadius: 25, // Rounded corners
    marginBottom: 20, // Space between buttons
    width: '100%',
    alignItems: 'center',
  },    
  buttonText: {
    color: '#333', // Darker text for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});