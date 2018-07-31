import React, {Component} from 'react';
import { StyleSheet, FlatList, TextInput, Button } from 'react-native';
import ListItem from '../ListItem/ListItem';


class displayView extends Component{

  render(){
    return(
      <FlatList 
        style={styles.listContainter} 
        data={this.props.places} 
        renderItem={(info) => (
          <ListItem 
            placeName={info.item.name} 
            placeImage={info.item.image} 
            onItemPressed={() => this.props.placeSelected(info.item.key)} 
          />
        )} />
    )
  }
}

const styles = StyleSheet.create({
  listContainter: {
    width: "100%"
  }
});

export default displayView;