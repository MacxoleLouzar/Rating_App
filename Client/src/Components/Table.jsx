import { useState, useRef } from "react";
import Data from "../data.json";
import "../styles/Table.css";
import toast from "react-hot-toast";

const Table = () => {
  const [data, setData] = useState(Data);
  const [editState, setEditState] = useState(-1);

  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");

    const validateInput = () => {
      if (!name) {
        toast.error("Your name is required!");
        return false;
      }

      if (!rate) {
        toast.error("Your rate is required!");
        return false;
      }

      if (!comment) {
        toast.error("Your comment is required!");
        return false;
      }
      return true;
    };
    
    const showAlert = () => {
    if (!validateInput()) {
      return;
    }
  }


  return (
    <div className="tableWrap">
      <div>
        <AddMember setData={setData} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>Name</th>
              <th>Rate</th>
              <th>Comment</th>
              <th>Action</th>
            </thead>
            {data.map((current, index) =>
              editState === current.id ? (
                <EditMemeber current={current} data={data} setData={setData} />
              ) : (
                <tr key={index}>
                  <td>{current.name}</td>
                  <td>{current.rate}</td>
                  <td>{current.comment}</td>
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
    const rate = event.target.elements.rate.value;
    const comment = event.target.elements.comment.value;
    const updatedData = data.map((d) =>
      d.id === editState ? { ...d, name: name, rate: rate, comment: comment } : d
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
    const rate = event.target.value;
    const updateData = data.map((d) =>
      d.id === current.id ? { ...d, rate: rate } : d
    );
    setData(updateData);
  }
  function handlecomment(event) {
    const comment = event.target.value;
    const updateData = data.map((d) =>
      d.id === current.id ? { ...d, comment: comment } : d
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
          type="rate"
          onChange={handleEamil}
          value={current.rate}
          name="rate"
          placeholder="Enter rate"
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handlecomment}
          value={current.comment}
          name="comment"
          placeholder="Enter comment"
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
  const rateRef = useRef();
  const commentRef = useRef();

  function handleValue(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const rate = event.target.elements.rate.value;
    const comment = event.target.elements.comment.value;
    const newMember = {
      id: 5,
      name,
      rate,
      comment,
    };
    setData((prevData) => prevData.concat(newMember));
    nameRef.current.value = "";
    rateRef.current.value = "";
    commentRef.current.value = "";
  }

  return (
    <form onSubmit={handleValue}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="rate"
        name="rate"
        placeholder="Enter Rate"
        ref={rateRef}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="text"
        name="comment"
        placeholder="Enter Comment"
        ref={commentRef}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="addForm">
        Add
      </button>
    </form>
    
  );
}

export default Table;
