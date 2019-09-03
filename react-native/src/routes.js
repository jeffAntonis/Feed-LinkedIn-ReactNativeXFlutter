import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Feed from './pages/Feed';

const Routes = createSwitchNavigator({
  Feed
});

export default createAppContainer(Routes);