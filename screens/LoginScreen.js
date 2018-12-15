import React, { Component } from "react";
import { Button, View, StyleSheet, Text, TextInput, ScrollView, AppRegistry } from "react-native";
//import { ScrollView } from "react-native-gesture-handler";
import loginFunction from "../api";
import index from '../index';

export default class LoginScreen extends React.Component {
  openSectionListScreen = () => {
    this.props.navigation.navigate('SectionList');
  };

  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '',
      loginPassword: '',
    };
  };

  static navigationOptions = {
    title: 'Class Section Management',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(loginUsername) => this.setState({ loginUsername })}
          value={this.state.loginUsername}
          placeholder="Username" />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          secureTextEntry={true}
          onChangeText={(loginPassword) => this.setState({ loginPassword })}
          value={this.state.loginPassword}
          placeholder="Password" />
        <ScrollView>
          <Button title="Press to Log In!" onPress={this.openSectionListScreen} />
          <Text>The button above navigates to the Section List Screen.</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});