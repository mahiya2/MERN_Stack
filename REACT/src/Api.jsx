import { useState, useEffect } from "react";
import axios from "axios";

function API() {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get(API);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Add User
  async function addUser() {
    if (name === "" || email === "") {
      alert("Please fill all details");
      return;
    }

    try {
      const response = await axios.post(API, {
        name,
        email,
      });

      setUser([...user, response.data]);

      setName("");
      setEmail("");

      alert("User Added Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  // Fill input fields for editing
  function editUser(data) {
    setName(data.name);
    setEmail(data.email);
    setEditId(data.id);
  }

  // Update User
  async function updateUser() {
    if (name === "" || email === "") {
      alert("Please fill all details");
      return;
    }

    try {
      const response = await axios.put(`${API}/${editId}`, {
        id: editId,
        name,
        email,
      });

      setUser(
        user.map((u) =>
          u.id === editId ? response.data : u
        )
      );

      setEditId(null);
      setName("");
      setEmail("");

      alert("User Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  // Delete User
  async function deleteUser(id) {
    try {
      await axios.delete(`${API}/${id}`);

      setUser(user.filter((u) => u.id !== id));

      alert("User Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>React CRUD Operations</h1>

        <label>
          <b>Name:</b>
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <label>
          <b>Email:</b>
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        {editId ? (
          <button onClick={updateUser}>UPDATE</button>
        ) : (
          <button onClick={addUser}>ADD</button>
        )}

        <hr />

        {user.map((u) => (
          <div
            key={u.id}
            style={{
              border: "2px solid brown",
              margin: "15px",
              padding: "15px",
            }}
          >
            <h2>{u.name}</h2>

            <h3>{u.email}</h3>

            <button onClick={() => editUser(u)}>
              Edit
            </button>

            <button
              onClick={() => deleteUser(u.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default API;