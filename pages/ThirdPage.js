import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const ThirdPage = ({navigation}) => {
  const data = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Third Page</Text>
      <Text style={styles.subtitle}>
        Here are some items you can interact with:
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <Pressable style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </Pressable>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to Home Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Go to Second Page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#90CAF9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#0D47A1',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ThirdPage;
