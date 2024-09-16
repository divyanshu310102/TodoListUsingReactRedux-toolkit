import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./features/todoSlice.js";

function App() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAdd = (e) => {
    e.preventDefault();
    if (item.trim()) {
      dispatch(addItem(item));
      setItem("");
    }
  };

  const handleDel = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg")',
      }}
    >
      <div className="bg-blue-300 bg-opacity-30 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          To-Do List
        </h1>

        <div className="flex mb-6">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Add todo items ..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAdd}
            className="ml-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="text-gray-800">{item}</span>
              <button
                onClick={() => handleDel(item)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
