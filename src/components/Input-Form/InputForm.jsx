import PropTypes from "prop-types";
import { useState } from "react";
import "./InputForm.css";
export default function InputForm({
  edited,
  editValue,
  setEditValue,
  editId,
  onAddTasks,
  onEditButton,
}) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { name, id: Date.now() };
    if (!edited) {
      if (!name) return;
      onAddTasks(task);
      setName("");
    } else {
      onEditButton(editId);
      setName("");
    }
  };
  const handleChange = (e) => {
    setName(e.target.value);
    setEditValue(e.target.value);
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-8">
        <input
          type="text"
          placeholder="Enter a Task"
          value={edited ? editValue : name}
          onChange={handleChange}
        />
      </div>
      <div className="col-4">
        <button
          className={`${edited ? "btn-primary" : "btn-success"} add`}
          type="submit"
        >
          {edited ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
}
InputForm.propTypes = {
  onAddTasks: PropTypes.func.isRequired,
  setEditValue: PropTypes.func.isRequired,
  onEditButton: PropTypes.func,
  edited: PropTypes.bool,
  editValue: PropTypes.string,
  editId: PropTypes.number,
};
