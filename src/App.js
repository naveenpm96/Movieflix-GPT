import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/ReduxStore/appStore";

function App() {
  return (
    <div className="App ">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
