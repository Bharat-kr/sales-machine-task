import { useState } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { TabProvider } from "./contexts/TabsContext";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <TabProvider>
      <div className="app_wrapper">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Main setOpen={setOpen} />
          <Rightbar open={open} setOpen={setOpen} />
        </div>
      </div>
    </TabProvider>
  );
}

export default App;
