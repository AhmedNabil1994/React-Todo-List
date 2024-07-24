import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./Tasks.css";
export default function Tasks({ tasks, onDelete, onEditIcon }) {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onEditIcon={onEditIcon}
        />
      ))}
    </div>
  );
}
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditIcon: PropTypes.func.isRequired,
  onEditId: PropTypes.func,
};
