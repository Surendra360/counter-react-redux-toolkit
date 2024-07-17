
import { useDispatch, useSelector } from "react-redux";
import { asyncDecrease, increase } from "./store/actions/counterActions";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counterReducer);

    const increasevalue = () => {
        dispatch(increase(1));
    };
    const decreasevalue = () => {
        dispatch(asyncDecrease(1));
    };

    return (
        <div>
            <h1>{value}</h1>
            <button
                onClick={increasevalue}
                
            >
                Increase Value By 1
            </button>
            <button onClick={decreasevalue} >
                Decrease Value By 1
            </button>
        </div>
    );
};

export default App;
