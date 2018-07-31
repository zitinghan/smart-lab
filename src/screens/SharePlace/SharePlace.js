import React, { Component } from "react";
import {View, Text} from 'react-native';
import { connect } from "react-redux";

import PlaceInput from '../../components/View/ControlView';
import { addPlace } from "../../store/actions/index";

class SharePlaceScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type == "NavBarButtonPress"){
      if (event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  placeAdded = placeName => {
    this.props.placeAdded(placeName);
  }
  render() {
    return(
      <View>
        <PlaceInput placeAdded={this.placeAdded} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    placeAdded: (placeName) => dispatch(addPlace(placeName))
  }
}
export default connect(null, mapDispatchToProps)(SharePlaceScreen);