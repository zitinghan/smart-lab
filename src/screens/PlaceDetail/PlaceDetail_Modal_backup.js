import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class placeDetail extends Component {

  render() {

    let modalContent = null;

    if (this.props.placeSelected) {
      modalContent = (
        <View>
          <Image source={this.props.placeSelected.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.placeSelected.name}</Text>
        </View>
      )
    }

    return (
      <Modal
        onRequestClose={this.props.onModalClosed}
        visible={this.props.placeSelected !== null}
        animationType="slide"
      >
        <View style={styles.modelContainer}>
          {modalContent}
          <View>
            <TouchableOpacity onPress={this.props.onItemDeleted}>
              <View style={styles.deleteButton}>
                <Icon size={30} name="ios-trash" color="red" />
              </View>
            </TouchableOpacity>
            <Button title="Close" onPress={this.props.onModalClosed} />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modelContainer: {
    margin: 22
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }

})
export default placeDetail;
