import { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
const Header = ({ title, showAddTask, setShowAddTask }) => {
  const clicked = () => {
    setShowAddTask(!showAddTask);
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      {!showAddTask && (
        <h3>
          AddTask{" "}
          <FaPlusCircle
            style={{ color: "green", cursor: "pointer" }}
            onClick={clicked}
          />
        </h3>
      )}

      {showAddTask && (
        <h3>
          Cancel{" "}
          <FaTimesCircle
            style={{ color: "red", cursor: "pointer" }}
            onClick={clicked}
          />
        </h3>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
