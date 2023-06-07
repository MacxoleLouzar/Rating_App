import { useState, useRef } from "react";
import Data from "../data.json";
import "../styles/Table.css";

const Table = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </thead>
            {data.map((current, index) =>
              editState === current.id ? (
                <EditMemeber current={current} data={data} setData={setData} />
              ) : (
                <tr key={index}>
                  <td>{current.name}</td>
                  <td>{current.email}</td>
                  <td>{current.phone}</td>
                  <td>
                    <button
                      type="button"
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );
  function handleUpdate(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const updatedData = data.map((d) =>
      d.id === editState ? { ...d, name: name, email: email, phone: phone } : d
    );
    setEditState(-1);
    setData(updatedData);
  }

  function handleEdit(id) {
    setEditState(id);
  }

  function handleDelete(id) {
    const updatedData = data.filter((d) => id !== d.id);
    setData(updatedData);
  }
};

function EditMemeber({ current, data, setData }) {
  function handleName(event) {
    const name = event.target.value;
    const updateData = data.map((d) =>
      d.id === current.id ? { ...d, name: name } : d
    );
    setData(updateData);
  }
  function handleEamil(event) {
    const email = event.target.value;
    const updateData = data.map((d) =>
      d.id === current.id ? { ...d, email: email } : d
    );
    setData(updateData);
  }
  function handlePhone(event) {
    const phone = event.target.value;
    const updateData = data.map((d) =>
      d.id === current.id ? { ...d, phone: phone } : d
    );
    setData(updateData);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handleName}
          value={current.name}
          name="name"
          placeholder="Enter Name"
        />
      </td>
      <td>
        <input
          type="email"
          onChange={handleEamil}
          value={current.email}
          name="email"
          placeholder="Enter Email"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlePhone}
          value={current.phone}
          name="phone"
          placeholder="Enter Phone"
        />
      </td>
      <td>
        <button type="submit" className="updateBtn">
          Update
        </button>
      </td>
    </tr>
  );
}

function AddMember({ setData }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleValue(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const newMember = {
      id: 5,
      name,
      email,
      phone,
    };
    setData((prevData) => prevData.concat(newMember));
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <form onSubmit={handleValue}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        ref={emailRef}
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        ref={phoneRef}
      />
      <button className="addForm">Add</button>
    </form>
  );
}

export default Table;
