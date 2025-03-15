import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";

const Role = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-5 w-full overflow-x-auto p-5">
        <div className="flex flex-row justify-between"></div>
        <button className="btn btn-sm w-48 ml-auto">Create Role</button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Role;
