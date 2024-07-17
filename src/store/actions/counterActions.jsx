export { increase } from "../reducers/counterSlice";
import { decrease } from "../reducers/counterSlice";
// export const asyncAction = () => async(dispatch, getState) => {}

export const asyncDecrease = (val) => async (dispatch, getState) => {
    try {
        // console.log(getState());
        setTimeout(() => {
            dispatch(decrease(val));
        }, 100);
    } catch (error) {
        console.log(error);
    }
};