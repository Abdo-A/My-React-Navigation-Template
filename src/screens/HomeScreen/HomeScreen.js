import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Home</Text>

        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />

        <Button
          title="Go to Home partial"
          onPress={() => this.props.navigation.navigate("HomePartial")}
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
