import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Settings</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />

        <Button
          title="Go to settings partial"
          onPress={() => this.props.navigation.navigate("SettingsPartial")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
