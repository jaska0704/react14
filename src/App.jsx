import React from "react";
import { UserContex } from "./context/context-user/contex-user-pro";
import { ADD, DELETE, EDIT } from "./context/context-user/user-type";

function App() {
  const [input, setInput] = React.useState("");
  const { userData, userDatapatch } = React.useContext(UserContex);

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
    userDatapatch({ type: EDIT, payload: { name: newString, id } });
  };

  return (
    <>
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
              onClick={() => {
                editInput(item.id, item.name);
              }}
            >
              Edit
            </button>
            <button
              className=" max-w-[10%] w-full bg-red-400 text-white py-2 rounded-lg"
              onClick={() => {
                if (confirm("Ishonchingiz komilmi?")) deletInput(item.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div role="tablist" className="tabs tabs-lifted tabs-lg outline-none">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab outline-none"
          aria-label="Tab 1"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 "
        >
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </>
  );
}

export default App;
