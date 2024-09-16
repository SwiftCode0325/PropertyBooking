import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <ImSpinner9 size={30} className="animate-spin" />
        </div>
    );
};

export default Spinner;