import React from "react";
import { ContexuserPro } from "./context/context-user/contex-user-pro";
import { ADD, DELETE, EDIT } from "./context/context-user/user-type";

function App() {
  const [input, setInput] = React.useState("");
  const { userData, userDatapatch } = React.useContext(ContexuserPro);

  const submit = (e) => {
    e.preventDefault();
    userDatapatch({ type: ADD, payload: { name: input, id: Date.now() } });
    setInput("");
  };

  const deletInput = (id) => {
    userDatapatch({ type: DELETE, payload: id });
  };

  const editInput = (id, value) => {
    let newString = prompt("edit", value);
    userDatapatch({type:EDIT, payload: {name:newString, id}})
  }

  return (
    <div className=" max-w-[80%]  mx-auto text-center py-6  bg-slate-500">
      <form
        className="flex justify-center items-center gap-8 pt-7"
        onSubmit={submit}
      >
        <input
          className="  max-w-[60%] w-full rounded-lg"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          name="name"
          type="text"
        />
        <button
          className=" max-w-[10%] w-full bg-zinc-700 text-white py-2 rounded-lg"
          type="submit"
        >
          Add
        </button>
      </form>
      {userData.user?.map((item) => (
        <div
          className="bg-white max-w-[73%] mx-auto my-2 rounded-lg flex justify-evenly py-2"
          key={item.id}
        >
          <h1>{item.name}</h1>
          <button
            className=" max-w-[10%] w-full bg-green-400 text-white py-2 rounded-lg"
            onClick={() =>{ editInput(item.id, item.name);
            }}
          >
            Edit
          </button>
          <button
            className=" max-w-[10%] w-full bg-red-400 text-white py-2 rounded-lg"
            onClick={() =>{
              if (confirm("Ishonchingiz komilmi?"))  deletInput(item.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
