import { useState } from "react";

import "./ArraysEx.css";

interface Pet {
  name: string;
  type: string;
  id: number;
}

function ArraysEx() {
  const [pets, setPets] = useState([
    {
      name: "Paco",
      type: "Dog",
      id: 1,
    },
    {
      name: "Bubba",
      type: "Cat",
      id: 2,
    },
    {
      name: "Watson",
      type: "Fish",
      id: 3,
    },
  ]);

  const [colors, setColors] = useState([
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
  ]);

  function addColor(color: string): void {
    setColors((prev) => [...colors, color]);
  }

  function deletePet(name: string) {
    let index = pets.findIndex((pet) => pet.name === name);
    setPets((prev) => {
      const newList = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <section>
      <div className="color-list">
        <h2>Colors</h2>
        <ol>
          {colors.map((color, i) => (
            <li key={i}>{color}</li>
          ))}
        </ol>
      </div>
      <div className="btns">
        <button
          onClick={() => addColor("Indigo")}
          className="color-btn btn-indigo"
        >
          Add Indigo
        </button>
        <button
          onClick={() => addColor("Black")}
          className="color-btn btn-black"
        >
          Add Black
        </button>
        <button
          onClick={() => addColor("White")}
          className="color-btn btn-white"
        >
          Add White
        </button>
      </div>
      <div className="pet-table">
        <h2>Pets</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deletePet(pet.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
}

export default ArraysEx;
