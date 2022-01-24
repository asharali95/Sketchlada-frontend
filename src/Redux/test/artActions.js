import axios from "axios";

export const getAllArts = () => async (dispatch) => {
  try {
    var {
      data: {
        data: { arts },
      },
    } = await axios.get("/arts");
    console.log(arts);
    dispatch({
      type: "SET_ARTS",
      payload: {
        arts,
      },
    });
  } catch (error) {
    alert(error);
  }
};
