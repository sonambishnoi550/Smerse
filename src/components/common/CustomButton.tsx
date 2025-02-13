import React from "react";

interface CustomButtonProps {
    text: string;
    myClass?: string;
    customOnClick?: () => void;

}

const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "", customOnClick, }) => {
    return (
        <button
            onClick={customOnClick}
            className={`text-xl font-extrabold py-[9px] px-[29px] shadow-[0px_4px_4px_0px_#ff676b33] text-white rounded-lg transition-all duration-500 hover:scale-110 relative bg-gradient-to-b from-purple via-dark-pink to-dark-orange ${myClass}`}
        >
            {text}
        </button>
    );
};

export default CustomButton;
