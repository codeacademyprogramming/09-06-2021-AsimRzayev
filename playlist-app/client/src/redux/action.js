import { typeConst } from "./constants";
import axios from "axios";
export function addMusic(music) {
    return {
        type: typeConst.ADD_MUSIC,
        payload: music,
    };
}
export const getAllMusic = () => (dispatch) => {
    axios.get(`http://localhost:5000/reservations/`).then((response) => {
        dispatch({ type: typeConst.GET_ALL_MUSIC, payload: response.data });
    });
};
export const getMusic = (id) => (dispatch) => {
    axios.get(`http://localhost:5000/reservations/${id}`).then((response) => {
        dispatch({ type: typeConst.GET_MUSIC, payload: response.data });
    });
};
