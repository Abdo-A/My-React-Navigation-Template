import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default class HomePartialScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am Home Partial</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
