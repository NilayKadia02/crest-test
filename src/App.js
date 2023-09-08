import UserRoutes from "./routes";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserRoutes />
      </Provider>
    </div>
  );
}

export default App;
