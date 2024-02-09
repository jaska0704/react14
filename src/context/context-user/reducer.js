import { number } from "./states";
import { ADD, DELETE, EDIT } from "./user-type";

export const redux = (data = number, action) => {
  switch (action.type) {
    case ADD:
      return { ...data, user: [...data.user, action.payload] };
    case DELETE:
      const newData = data.user.filter((item) => item.id !== action.payload);
      return { ...data, user: newData };
    case EDIT:
      const newName = data.user.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item
      );
      return { ...data, user: newName };
    default:
      return data;
  }
};
