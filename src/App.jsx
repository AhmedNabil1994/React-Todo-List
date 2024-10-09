import { useState } from "react";
import "./App.css";
import InputForm from "./components/Input-Form/InputForm";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const initial = [
    { name: "Study React", id: 1 },
    { name: "Go to Gym", id: 2 },
    { name: "Read Quran", id: 3 },
  ];
  const [tasks, setTasks] = useState(initial);
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(null);
  const isEdited = editId === null ? false : true; //===> way1 (better with derived state)
  // const [isEdited, setIsEdited] = useState(false); // ==> way2

  const handleTasks = (item) => {
    setTasks((tasks) => [...tasks, item]);
  };
  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };
  const handleReset = () => {
    setTasks([]);
  };
  const handleEditIcon = (id) => {
    // setIsEdited(true); //way2
    setEditId(id);
    tasks.map((task) => {
      if (task.id === id) {
        setEditValue(task.name);
      }
    });
  };
  const handleEditButton = (id) => {
    if (!editValue) return;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: editValue };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
    // console.log(editValue);
    setEditId(null); // ==> way1
    // setEditValue("");
    // setIsEdited(false); // ==> way2
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 app">
          <h1>Todo-List Application</h1>
          <InputForm
            onAddTasks={handleTasks}
            edited={isEdited}
            editValue={editValue}
            setEditValue={setEditValue}
            tasks={tasks}
            setTasks={setTasks}
            editId={editId}
            onEditButton={handleEditButton}
          />
          <Tasks
            tasks={tasks}
            onDelete={handleDelete}
            onEditIcon={handleEditIcon}
          />
          <button
            className=" btn btn-danger col-md-4 col-12 reset"
            onClick={handleReset}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
