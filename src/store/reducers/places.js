import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';
import { deletePlace } from '../actions';

const initialState = {
  places: []
}

const reducer = (state = initialState, action) =>{
  switch (action.type){
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({key: Math.random(), name: action.placeName, 
          //image: placeImage
          image: {uri: "https://images.freeimages.com/images/small-previews/2fe/butterfly-1390152.jpg"}
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      }
    
    default:
      return state;
  }
}

export default reducer;