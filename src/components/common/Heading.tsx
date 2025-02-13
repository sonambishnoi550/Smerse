import React from "react";
interface HeadingProps {
    text: string;
    myClass?: string;
    spanClass?: string;
}

const Heading = ({ text, myClass, spanClass }: HeadingProps) => {
    return (
        <h2
            className={`${myClass} font-black text-5xl leading-[57.6px] tracking-wider max-md:text-4xl max-md:leading-[43.2px] max-w-max bg-gradient-to-b from-purple via-dark-pink to-dark-orange bg-clip-text text-transparent relative`}
        >
            {text}
            <span
                className={`${spanClass} font-black absolute text-nowrap left-[1px] -top-[1px] text-5xl leading-[57.6px] tracking-wider max-md:text-4xl max-md:leading-[43.2px] text-white`}
            >
                {text}
            </span>
        </h2>
    );
};

export default Heading;