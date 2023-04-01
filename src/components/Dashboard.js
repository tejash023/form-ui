import React, { useState } from "react";
import { MdOutlineAddCircle, MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const [fieldNames, setFieldNames] = useState([]);
  const [editMode, setEditMode] = useState(true);

  const handleFieldInput = () => {
    const id = uuidv4();
    const index = fieldNames.length + 1;
    setFieldNames((prev) => [
      ...prev,
      {
        id,
        index,
        name: "addName",
        type: "String",
        required: false,
      },
    ]);
  };

  const handleFieldDelete = (id) => {
    setFieldNames(fieldNames.filter((fieldItems) => fieldItems.id !== id));
  };

  const handleNameChange = (id, newName) => {
    setFieldNames((prevState) =>
      prevState.map((field) =>
        field.id === id ? { ...field, name: newName } : field
      )
    );
  };

  const handleTypeChange = (id, newType) => {
    setFieldNames((prevState) =>
      prevState.map((field) =>
        field.id === id ? { ...field, type: newType } : field
      )
    );
  };

  const handleRequired = (id) => {
    console.log("checked");
    setFieldNames((prevState) =>
      prevState.map((field) =>
        field.id === id ? { ...field, required: !field.required } : field
      )
    );
  };

  return (
    <div className="h-auto w-3/5 bg-white shadow-xl rounded">
      <p className="text-center text-blue-600 font-bold text-lg py-2">
        DASHBOARD
      </p>
      <div className="flex items-center justify-between p-6">
        <p className="text-sm font-bold">FIELD NAMES AND TYPE</p>
        <div
          className="hover:text-purple-500 cursor-pointer"
          onClick={() => handleFieldInput()}
        >
          <MdOutlineAddCircle size="1.5rem" />
        </div>
      </div>

      <div className="px-4">
        {fieldNames.map((fieldItem) => (
          <div
            key={fieldItem.id}
            className="flex items-center justify-between px-4 py-2 border-solid border-2 rounded border-gray-300 my-2 mx-2"
          >
            <div className="flex items-center gap-2">
              <p className="text-gray-400">{fieldItem.index}.</p>

              <input
                className="p-1 w-2/6 outline:none focus:outline-none focus:border-sky-500 focus:rounded focus:ring-1 focus:ring-sky-500 mr-3"
                value={fieldItem.name}
                onChange={(e) => handleNameChange(fieldItem.id, e.target.value)}
              />

              <select
                className="p-1 bg-gray-300 rounded w-28"
                value={fieldItem.type}
                onChange={(e) => handleTypeChange(fieldItem.id, e.target.value)}
              >
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
                <option value="Object">Object</option>
              </select>
            </div>

            {editMode && (
              <div className="flex items-center gap-2">
                <p className="text-xs">Required</p>
                <input
                  type="checkbox"
                  onChange={() => handleRequired(fieldItem.id)}
                />

                {!fieldItem.required && (
                  <MdDelete
                    className="hover:text-red-600 cursor-pointer"
                    size="1.25rem"
                    onClick={() => handleFieldDelete(fieldItem.id)}
                  />
                )}
              </div>
            )}
          </div>
        ))}

        {fieldNames.length > 0 && (
          <div className="w-full flex justify-center py-2">
            <button
              className="content-center bg-blue-500 px-6 py-2 rounded text-white text-center font-bold hover:bg-blue-700"
              onClick={() => console.log(fieldNames)}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
