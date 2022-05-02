import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route
            path="/index"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
