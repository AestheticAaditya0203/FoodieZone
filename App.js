import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShow from "./src/screens/ResultsShow";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShow,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie Zone",
    },
  }
);

export default createAppContainer(navigator);
