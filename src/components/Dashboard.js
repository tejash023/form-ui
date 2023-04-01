import React from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { handleFieldInput } from "../utils/appSlice";

import FieldInput from "./FieldInput";

const Dashboard = () => {
  //GETTING FIELDITEMS FROM STORE - STORE SUBSCRIPTION
  const fieldItems = useSelector((store) => store.app.fieldItems);

  const dispatch = useDispatch();

  //HANDLING DEFAULT FIELD DATA
  const handleFieldData = () => {
    const id = uuidv4();
    const index = fieldItems.length + 1;
    dispatch(
      handleFieldInput({
        id,
        index,
        name: "addName",
        type: "String",
        required: false,
        Obj: [],
      })
    );
  };

  return (
    <div className="h-auto w-[95%] md:w-3/5 bg-white shadow-xl rounded">
      <p className="text-center text-blue-600 font-bold text-xl py-4">
        DASHBOARD
      </p>

      <div className="flex items-center justify-between p-6">
        <p className="text-sm font-bold">FIELD NAMES AND TYPE</p>
        <div
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          onClick={() => handleFieldData()}
        >
          <MdOutlineAddCircle size="1.5rem" />
        </div>
      </div>

      <div className="px-1 md:px-4">
        {fieldItems.map((fieldItem) => (
          <FieldInput fieldItem={fieldItem} key={fieldItem.id} />
        ))}

        {fieldItems.length > 0 && (
          <div className="w-full flex justify-center py-4">
            <button
              className="content-center bg-blue-500 px-6 py-2 rounded text-white text-center font-bold hover:bg-blue-700"
              onClick={() => console.log(fieldItems)}
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
