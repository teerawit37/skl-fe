import { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({
    children,
    onClick,
    disabled = false,
    className = ''
  }: Props) => {

    return (
        <button disabled={disabled} onClick={onClick} className={`skl-button ${className} ${disabled && 'skl-button--disabled'}`}>{children}</button>
    );
}

export default Button;