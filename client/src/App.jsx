import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    
    <div className="bg-zinc-900 h-screen">
      <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="/edit/:id" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
    </div>
  );
}

export default App;
