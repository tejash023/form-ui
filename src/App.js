import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard";
import "./input.css";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center bg-gradient-to-tr from-cyan-100 to-blue-500 min-h-screen py-4">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
