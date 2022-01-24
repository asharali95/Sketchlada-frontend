import axios from "axios";
import history from "../../history";
import { authConstants } from "./authConstants";

export const signup =
  ({ name, email, password, passwordConfirm, role }) =>
  async (dispatch) => {
    try {
      console.log(passwordConfirm);
      const confirmPassword = passwordConfirm;

      var {
        data: { data: { user } = {} },
      } = await axios.post(`/auth/signup`, {
        username: name,
        email,
        password,
        confirmPassword,
        role,
      });
      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user,
        },
      });
      history.push("/dashboard");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      var {
        data: { data: { user } = {} },
      } = await axios.post(`/auth/login`, { email, password });
      dispatch({
        type: authConstants.SET_USER,
        payload: {
          user,
        },
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({
    type: authConstants.REMOVE_USER,
  });
};
