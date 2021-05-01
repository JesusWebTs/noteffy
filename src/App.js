import "./App.css";
import NotesPage from "./pages/NotesPage";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  useEffect(() => {
    if (!localStorage.getItem("uid")) localStorage.setItem("uid", uuidv4());

    return () => {};
  }, []);
  return (
    <div className="App">
      <NotesPage></NotesPage>
    </div>
  );
}

export default App;
