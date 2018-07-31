import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from './src/store/configurationStore';

const store = configureStore();

//Register Screen
Navigation.registerComponent(
  "places.AuthScreen", () => AuthScreen, 
  store, 
  Provider
);
Navigation.registerComponent(
  "places.SharePlaceScreen", 
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "places.FindPlaceScreen", 
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "places.SideDrawer",
  () => SideDrawer,
  store,
  Provider
)


//start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "places.AuthScreen",
    title: "Login"
  }
});

