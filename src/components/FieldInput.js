import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineAddCircle, MdDelete } from "react-icons/md";
import {
  handleNameUpdate,
  handleDelete,
  handleType,
  handleFieldInput,
} from "../utils/appSlice";
import ToggleButton from "./ToggleButton";

const FieldInput = ({ fieldItem }) => {
  const { id, name, type, required, index } = fieldItem;

  const Obj = fieldItem?.Obj;

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  //UPDATING FIELD NAME
  const handleNameChange = (id, name) => {
    dispatch(handleNameUpdate({ id, name }));
  };

  //DELETING FIELD
  const handleFieldDelete = (id) => {
    dispatch(handleDelete({ id }));
  };

  //UPDATING FIELD TYPE - STRING, NUMBER, BOOLEAN and OBJECT
  const handleTypeChange = (id, type) => {
    dispatch(handleType({ id, type }));
  };

  const handleNestedFieldData = (id) => {
    const newIndex = !Obj ? 1 : Obj.length + 1;
    dispatch(
      handleFieldInput({
        id,
        index: newIndex,
        name: "addName",
        type: "String",
        required: false,
      })
    );
  };

  return (
    <div
      className="flex items-center justify-between px-1 md:px-4 py-2 border-solid border-2 rounded border-gray-300 my-2 mx-2"
      onMouseEnter={() => setEditMode(true)}
      onMouseLeave={() => setEditMode(false)}
    >
      <div className="flex items-center gap-2">
        <p className="text-gray-400">{index}.</p>

        <input
          className="p-1 w-1/4 md:w-2/6 outline:none focus:outline-none focus:border-sky-500 focus:rounded focus:ring-1 focus:ring-sky-500 mr-3 cursor-pointer transition-all duration-500"
          value={name}
          onChange={(e) => handleNameChange(id, e.target.value)}
        />

        <select
          className="p-1 bg-gray-300 rounded w-28 cursor-pointer outline:none focus:outline-none"
          value={type}
          onChange={(e) => handleTypeChange(id, e.target.value)}
        >
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="object">Object</option>
        </select>
      </div>
      {type === "object" && (
        <div
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => handleNestedFieldData(id)}
        >
          <MdOutlineAddCircle size="1.5rem" />
        </div>
      )}

      {editMode && (
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold">Required</p>

          <ToggleButton id={id} required={required} />
          {!required && (
            <MdDelete
              className="hover:text-red-600 cursor-pointer"
              size="1.25rem"
              onClick={() => handleFieldDelete(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FieldInput;
