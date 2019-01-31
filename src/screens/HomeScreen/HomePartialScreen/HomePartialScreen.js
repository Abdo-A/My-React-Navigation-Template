import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default class HomePartialScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home Partial',
    headerRight: (
      <TouchableOpacity
        style={{ paddingRight: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Home Partial</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
