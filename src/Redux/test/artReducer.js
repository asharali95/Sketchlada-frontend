const initialState = [];

const artReducer = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case "SET_ARTS":
      return payload.arts;
    default:
      return state;
  }
};

export default artReducer;
