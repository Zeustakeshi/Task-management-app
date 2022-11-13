import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
const Dropdown = ({ children, content = "hello" }) => {
    return (
        <Tippy
            offset={[0, 10]}
            interactive
            placement="bottom-start"
            trigger="click"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    {content}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Dropdown;
