import { useRouter } from "next/router";
import Image from 'next/image';
import { useToggle } from "../../hooks/useToggle";

type FunctionType = (e: any) => void;

type DataList = {
    label: string,
    value: string,
}

interface ICardProps {
    data: DataList[];
    children?: React.ReactNode;
    disabled?: boolean;
    onChange?: FunctionType;
    value: string;
}

const Input = ({ data, children, disabled = false, onChange, value }: ICardProps) => {
    return (
        <select id="dropdown" onChange={onChange} value={value} className=" skl-select form-select" disabled={disabled}>
            {data.map((item, index) => (
                 <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
    );
};

export default Input;