import { CroctProvider } from "@croct/plug-react";
import "./App.css";
import Header from "./components/Layout/Header";

function App() {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <Header />
    </CroctProvider>
  );
}

export default App;
