import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";

const Home = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:3002/user/users");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Nav />
      <div className="flex flex-col gap-5 w-full overflow-x-auto p-5">
        <button className="btn btn-sm w-48 ml-auto">Create user</button>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user.map((row) => (
              <tr key={row.id}>
                <th>{row.id}</th>
                <td>{row.NAME}</td>
                <td>{row.email}</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <button>
                      <Pencil size={16} />
                    </button>
                    <button>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
