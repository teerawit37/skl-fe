type FunctionType = (e: any) => void;

interface Props {
    value: string;
    defalut: string;
    onChange: FunctionType;
    className?: string;
}

const Upload = ({
    value,
    defalut = '',
    onChange,
    className = ''
}: Props) => {

    const renderProfile = () => {
        if (value === '') {
            return (
                <div className={`skl-upload ${className}`}>
                    <label htmlFor="upload-button">
                        <div className="skl-upload__img-profile">
                            {defalut}
                            <div className='skl-upload__msg'>upload</div>
                        </div>
                    </label>
                    <input id="upload-button" className="d-none" type="file" name="myImage" onChange={onChange} />
                </div>

            )
        } else {
            return (
                <div className={`skl-upload ${className}`}>
                    <label htmlFor="upload-button">
                        <div className="skl-upload__img-profile">
                            <img className="skl-upload__img" src={`${value}`} />
                            <div className='skl-upload__msg'>upload</div>
                        </div>
                    </label>
                    <input id="upload-button" className="d-none" type="file" name="myImage" onChange={onChange} />
                </div>

            )
        }
    }


    return (
        renderProfile()
    );
}

export default Upload;