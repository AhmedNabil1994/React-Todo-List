import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./Task.css";

export default function Task({ task, onDelete, onEditIcon }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleChange() {
    setIsChecked(!isChecked);
  }
  function handleDelete() {
    onDelete(task.id);
  }

  return (
    <div className="row mb-3 task-container">
      <div
        className={`task-name col-md-9 col-6 ${isChecked ? "completed" : ""}`}
      >
        {task.name}
      </div>
      <div className="icons col-md-3 col-6 text-center">
        <input
          className={`form-check-input mr-2 ${
            isChecked ? "mark-complete" : ""
          }`}
          type="checkbox"
          value=""
          checked={isChecked}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit-icon mr-2"
          onClick={() => onEditIcon(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="delete-icon"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditIcon: PropTypes.func.isRequired,
};
