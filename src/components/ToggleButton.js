import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { handleRequired } from "../utils/appSlice";

const ToggleButton = ({ id, required }) => {
  const dispatch = useDispatch();

  const [isToggled, setIsToggled] = useState(required);

  //UPDATING REQUIRED - TRUE / FALSE
  const handleRequire = () => {
    setIsToggled(!required);
    dispatch(handleRequired({ id, isToggled }));
  };

  return (
    <div
      onClick={() => handleRequire()}
      className={classNames(
        "flex w-7 h-3 bg-gray-300  rounded-full transition-all duration-300 cursor-pointer",
        {
          "bg-green-200": isToggled,
        }
      )}
    >
      <span
        className={classNames(
          "h-3 w-3 bg-blue-500 rounded-full full transition-all duration-300",
          {
            "ml-4": isToggled,
          }
        )}
      />
    </div>
  );
};

export default ToggleButton;
