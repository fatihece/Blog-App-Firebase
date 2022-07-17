import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouter from "./rooter/AppRouter";
import { ToastContainer } from "react-toastify";
import { BlogContextProvider } from "./context/BlogContextProvider";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
