import { useContext, useEffect, useRef, useState } from "react";
// import Data from "../data.json";
import toast from "react-hot-toast";
import AppContext from "../context/AppContext";
import "../styles/Table.css";

const Table = () => {
  // const [data, setData] = useState(Data);
  const{ Learners, AddLearner, UpdateLearner} = useContext(AppContext)
  const [editState, setEditState] = useState(-1);

  const [name, setName] = useState([]);
  const [rating, setRate] = useState([]);
  const [comment, setComment] = useState([]);


  const validateInput = () => {
    // if (!name) {
    //   toast.error("Your name is required!");
    //   return false;
    // }

    if (!rating) {
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

  useEffect(()=>{
    fetch("https://sheetdb.io/api/v1/xcuq48o2wlen4")
    .then((res)=>res.json())
    .then((data)=>{
      setName(data)
    })
  },[])

  return (
    <div className="tableWrap">
      <div>
        <AddMember Learners={Learners} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <th>Name</th>
              <th>Rate</th>
              <th>Comment</th>
              <th>Action</th>
            </thead>
            {name.map((current, index) =>
              editState === current.id ? (
                <EditMemeber current={current} name={name} Learners={Learners} />
              ) : (
                <tr key={index}>
                  <td>{current.name}</td>
                  <td>{current.rating}</td>
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
    // const name = event.target.elements.name.value;
    const rate = event.target.elements.rate.value;
    const comment = event.target.elements.comment.value;
    const updatedData = name.map((d) =>
      d.id === editState ? { ...d, name: name, rating: rate, comment: comment } : d
    );
    setEditState(-1);
    UpdateLearner(updatedData);
  }

  function handleEdit(name) {
    setEditState(name);
  }

  function handleDelete(id) {
    const updatedData = name.filter((d) => id !== d.id);
    UpdateLearner(updatedData);
  }
};

function EditMemeber({ current, name, Learners }) {
  function handleName(event) {
    const name = event.target.value;
    const updateData = name.map((d) =>
      d.id === current.id ? { ...d, name: name } : d
    );
    Learners(updateData);
  }


  function handleRate(event) {
    const rate = event.target.value;
    const updateData = rating.map((d) =>
      d.id === current.id ? { ...d, rating: rate } : d
    );
    Learners(updateData);
  }
  function handlecomment(event) {
    const comment = event.target.value;
    const updateData = comment.map((d) =>
      d.id === current.id ? { ...d, comment: comment } : d
    );
    Learners(updateData);
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
          onChange={handleRate}
          value={current.rating}
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

function AddMember({ Learners }) {
  const nameRef = useRef();
  const rateRef = useRef();
  const commentRef = useRef();

  function handleValue(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const rate = event.target.elements.rate.value;
    const comment = event.target.elements.comment.value;
    const newMember = {
      id: id,
      name,
      rate,
      comment,
    };
    Learners((prevData) => prevData.concat(newMember));
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
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        type="rate"
        name="rate"
        placeholder="Enter Rate"
        ref={rateRef}
        // value={rate}
        // onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="text"
        name="comment"
        placeholder="Enter Comment"
        ref={commentRef}
        // value={comment}
        // onChange={(e) => setComment(e.target.value)}
      />
      <button className="addForm">Add</button>
    </form>
  );
}

export default Table;
