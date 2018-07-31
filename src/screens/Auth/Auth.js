import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component{
  state = {
    loginName: ""
  };

  placeNameHandler = val => {
    this.setState({
      loginName: val
    })
  };

  loginHandler = () => {
    if (this.state.loginName.trim() === "") {
      return;
    }
    this.props.placeAdded(this.state.loginName);

    //startMainTabs();
  };

  render(){
    return (
      <View style={styles.inputContainer}>
        <Text>Login</Text>
        <TextInput
          style={styles.placeInput}
          placeholder="User ID"
          value={this.loginName}
          onChangeText={this.placeNameHandler}
        />
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});

export default AuthScreen;