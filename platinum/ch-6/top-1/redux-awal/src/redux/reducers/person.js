import { ADD, INIT } from "../actions/person.js";

const initialState = [
  {
    id: 1,
    name: "Ryan Gosling",
    address: "Los Feliz, California, U.S",
    phoneNumber: "+1-123-123",
    photo:
      "https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case INIT:
      return action.payload;
    default:
      return state;
  }
}
