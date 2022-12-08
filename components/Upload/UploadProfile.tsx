type FunctionType = (e: any) => void;

interface Props {
    value: string;
    defalut: string;
    onChange: FunctionType;
    className?: string;
}

const UploadProfile = ({
    value,
    defalut = '',
    onChange,
    className = ''
}: Props) => {

    const renderProfile = () => {
        if (value === '') {
            return (
                <div className={`skl-upload-profile ${className}`}>
                    <label htmlFor="upload-button">
                        <div className="skl-upload-profile__img-profile">
                            {defalut}
                            <div className='skl-upload-profile__msg'>upload</div>
                        </div>
                    </label>
                    <input id="upload-button" className="d-none" type="file" name="myImage" onChange={onChange} />
                </div>

            )
        } else {
            return (
                <div className={`skl-upload-profile ${className}`}>
                    <label htmlFor="upload-button">
                        <div className="skl-upload-profile__img-profile">
                            <img className="skl-upload-profile__img" src={`${value}`} />
                            <div className='skl-upload-profile__msg'>upload</div>
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

export default UploadProfile;