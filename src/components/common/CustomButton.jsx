import React from "react";
const CustomButton = ({ text, myClass, customOnClick, customType }) => {
    return (
        <button type={customType}
            onClick={customOnClick}
            className={`text-xl font-extrabold py-[11px] pl-[25px] pr-[23px] shadow-[0px_4px_4px_0px_#ff676b33] text-white rounded-lg transition-all duration-500 after:transition-all relative bg-gradient-to-b from-purple via-dark-pink to-dark-orange ${myClass}`}
        >
       {text}
        </button>
    );
};

export default CustomButton;
