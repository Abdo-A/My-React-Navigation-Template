import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from 'react';

export default class SettingsPartialScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Settings Partial',
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
        <Text>I am SettingsPartial</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
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
