import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class controlView extends Component {

  state = {
    placeName : ""
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.props.placeAdded(this.state.placeName);
  };

  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="an awesome place"
          value={this.placeName} 
          onChangeText={this.placeNameChangeHandler} 
        />
        <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler} />
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  inputContainer:{
    //flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});

export default controlView;
