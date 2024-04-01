import { useState } from "react";
import Task from "./Task";

function Todolist() {
  const [students, setStudents] = useState(["sreekanth", "virat", "dhoni"]);

  const [newstudent, setNewStudent] = useState("");

  function handleChange(e) {
    setNewStudent(e.target.value);
  }

  function addStudent() {
    setStudents([...students, newstudent]);
  }

  function deletebtn(i) {
    var temp = [...students];
    temp.splice(i, 1);
    setStudents([...temp]);
  }

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="enter the name "
      />{" "}
      <br />
      <button onClick={addStudent}> Add Student </button>
      <Task students={students} deletebtn={deletebtn} />
    </>
  );
}

export default Todolist;
