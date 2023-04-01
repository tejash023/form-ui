import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "fieldNames",
  initialState: {
    fieldItems: [],
  },

  reducers: {
    handleFieldInput: (state, action) => {
      let isPresent = state.fieldItems.some(
        (item) => item.id === action.payload.id
      );
      if (isPresent) {
        state.fieldItems.forEach((field) => {
          if (field.id === action.payload.id) {
            field.Obj.push(action.payload);
          }
        });
      } else {
        state.fieldItems.push(action.payload);
      }
    },
    handleNameUpdate: (state, action) => {
      state.fieldItems.forEach((field) => {
        if (field.id === action.payload.id) {
          field.name = action.payload.name;
        }
      });
    },
    handleDelete: (state, action) => {
      state.fieldItems = state.fieldItems.filter(
        (items) => items.id !== action.payload.id
      );
    },
    handleType: (state, action) => {
      state.fieldItems.forEach((field) => {
        if (field.id === action.payload.id) {
          field.type = action.payload.type;
        }
      });
    },
    handleRequired: (state, action) => {
      state.fieldItems.forEach((field) => {
        if (field.id === action.payload.id) {
          field.required = !field.required;
        }
      });
    },
  },
});

//exporting actions by name
export const {
  handleNameUpdate,
  handleFieldInput,
  handleDelete,
  handleType,
  handleRequired,
} = appSlice.actions;

//exporting reducers
export default appSlice.reducer;
