import axios from "axios";
import { typeConst } from "./constants";
export let reducer = (state = [], action) => {
    switch (action.type) {
        case typeConst.ADD_MUSIC:
            axios
                .post(`http://localhost:5000/songs/add`, action.payload)
                .then((res) => console.log(res.data));
            return action.payload;
        case typeConst.GET_RESERV:
            return [...action.payload];
        case typeConst.GET_ALL_RESERV:
            return [...action.payload];
        default:
            return state;
    }
};
