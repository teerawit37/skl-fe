import { useEffect, useState } from "react";

interface Props {
    onClick: () => void;
    icon: string;
}

const IconButton = ({
    icon,
    onClick
  }: Props) => {

    return (
        <button onClick={onClick} className='skl-icon-button'>
            <i className={`${icon} skl-icon-button__icon`}></i>
        </button>
    );
}

export default IconButton;