import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import GetApi from "../api/GetApi";
import PutApi from "../api/PutApi.js";
import Input from "./Input";
import List from "./List"
//include images into your bundle

//create your first component
const Home = () => {
  let [taskItem, setTaskItems] = useState([]);
  let [taskElement, setTaskElement] = useState([]);

  useEffect(() => {
    GetApi().then((data) => {
      const taskData = data.map((taskName) => {
        return {
          task: taskName.label,
        };
      });

      setTaskElement(taskData);
    });
  }, []);

  useEffect(() => {
    PutApi(taskItem);
  }, [taskItem]);

  console.log(taskElement);

  const handlekeyUp = (newTask) => {
    if (newTask === "") {
      alert("Introduce a task");
    } else {
      setTaskItems([...taskItem, newTask]);
    }
  };

  const removeTask = (index) => {
    taskItem.splice(index, 1);
    setTaskItems([...taskItem]);
  };

  const removeDailyTask = (index) => {
    taskElement.splice(index, 1);
    setTaskElement([...taskElement]);
  };

  return (
    <section className="taskList-container">
      <div className="text-center">
        <h2>To do list</h2>
        <div>
          <Input handlekeyUp={handlekeyUp} />
        </div>

        <div>
          <List
            taskItem={taskItem}
            removeTask={removeTask}
            taskElement={taskElement}
            removeDailyTask={removeDailyTask}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
