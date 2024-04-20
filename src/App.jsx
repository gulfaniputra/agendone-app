import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Agendone</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Task #1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>{" "}
        <li>
          <label>
            <input type="checkbox" />
            Task #2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>{" "}
        <li>
          <label>
            <input type="checkbox" />
            Task #3
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
