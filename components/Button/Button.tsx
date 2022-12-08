import { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = ({
    children,
    onClick,
    className = ''
  }: Props) => {

    return (
        <button onClick={onClick} className={`skl-button ${className}`}>{children}</button>
    );
}

export default Button;