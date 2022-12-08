import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Button, IconButton } from '../../components/Button';
import { Input } from '../../components/Input';
import { AppLayout } from '../../components/Layout';
import { UploadProfile } from '../../components/Upload';
import { Select } from '../../components/Select';
import { useInput } from '../../hooks/useInput';
import { useToggle } from '../../hooks/useToggle';
import UserService from '../../services/user.service';
import { convertToBase64 } from '../../utils/file';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';

const universityList = [
    {
        label: 'มหาวิทยาลัยธรรมศาสตร์',
        value: 'TU'
    },
    {
        label: 'มหาวิทยาลัยจุฬาลงกรณ์',
        value: 'CU'
    },
    {
        label: 'มหาวิทยาลัยศิลปากร',
        value: 'SU'
    },
    {
        label: 'มหาวิทยาลัยศรีนครินทรวิโรฒ',
        value: 'SWU'
    }
]

const genderList = [
    {
        label: 'none',
        value: 'none'
    },
    {
        label: 'male',
        value: 'male'
    },
    {
        label: 'female',
        value: 'female'
    },
    {
        label: 'lgbtq+',
        value: 'lgbtq+'
    },
]

function Profile() {
    const [id, setId] = useState<string>('')
    const [img, setImg] = useState<string>('')
    const { value: firstname, onChange: onFirstNameChange, setInitailValue: setFirstName } = useInput('');
    const { value: lastname, onChange: onLastNameChange, setInitailValue: setLastName } = useInput('');
    const { value: nickname, onChange: onNickNameChange, setInitailValue: setNickname } = useInput('');
    const { value: university, onChange: onUniversityChange, setInitailValue: setUniversity } = useInput('');
    const { value: gender, onChange: onGenderChange, setInitailValue: setGender } = useInput('');
    const { value: birthday, setInitailValue: setBirthday } = useInput('');
    const { value: role, setInitailValue: setRole } = useInput('');

    const { value: isEditFirstName, onClick: toggleEditFirstName } = useToggle(false);
    const { value: isEditLastName, onClick: toggleEditLastName } = useToggle(false);
    const { value: isEditNickName, onClick: toggleEditNickName } = useToggle(false);
    const { value: isEditUniversity, onClick: toggleEditUniversity } = useToggle(false);
    const { value: isEditGender, onClick: toggleEditGender } = useToggle(false);

    const fetchProfile = () => {
        UserService.getProfile().then(
            (res) => {
                const data = res.data[0];
                setFirstName(data.firstname)
                setLastName(data.lastname)
                setNickname(data.nickname)
                setUniversity(data.university)
                setGender(data.gender)
                setRole(data.role)
                setId(data._id)
                setImg(data.img)
                if (data.birthday !== '') {
                    const day = dayjs(data.birthday).format(dateFormat)
                    setBirthday(day)
                } else {
                    const current = new Date();
                    const day = dayjs(current).format(dateFormat)
                    setBirthday(day)
                }
            }
        )
    }

    const handleUpdateProfile = () => {
        const payload = {
            firstname,
            lastname,
            nickname,
            university,
            gender,
            img,
            birthday
        }
        UserService.updateProfile(id, payload).then(
            () => {
                fetchProfile()
            }
        )
    }

    useEffect(() => {
        fetchProfile()
    }, [])


    const onImageChange = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            const base64 = await convertToBase64(img);
            setImg(base64 as string)
        }
    };



    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setBirthday(dateString)
    };

    return (
        <div className="skl-profile">
            <div className='container'>
                {/* profile */}
                <section className='my-4'>
                    <div className="skl-profile__title">Profile</div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='skl-profile__container'>
                            <div className='d-flex flex-column align-items-center mb-2'>
                                <UploadProfile
                                    value={img}
                                    defalut={firstname.substring(0, 1)}
                                    onChange={onImageChange}
                                ></UploadProfile>
                                <div className="skl-profile__instruct-label">{role}</div>
                            </div>

                            <div className="skl-profile__group">
                                <div className="skl-profile__label">First Name</div>
                                <div className='d-flex gap-1'>
                                    <Input
                                        disabled={!isEditFirstName}
                                        placeholder={'Fist Name'}
                                        value={firstname}
                                        onChange={onFirstNameChange} />
                                    <IconButton
                                        icon={isEditFirstName ? 'skl-icon-check' : 'skl-icon-pencil'}
                                        onClick={toggleEditFirstName}
                                    />
                                </div>
                            </div>
                            <div className="skl-profile__group">
                                <div className="skl-profile__label">Last Name</div>
                                <div className='d-flex gap-1'>
                                    <Input
                                        disabled={!isEditLastName}
                                        placeholder={'Last Name'}
                                        value={lastname}
                                        onChange={onLastNameChange} />
                                    <IconButton
                                        icon={isEditLastName ? 'skl-icon-check' : 'skl-icon-pencil'}
                                        onClick={toggleEditLastName}
                                    />
                                </div>
                            </div>
                            <div className="skl-profile__group">
                                <div className="skl-profile__label">Nick Name</div>
                                <div className='d-flex gap-1'>
                                    <Input
                                        disabled={!isEditNickName}
                                        placeholder={'Nick Name'}
                                        value={nickname}
                                        onChange={onNickNameChange} />
                                    <IconButton
                                        icon={isEditNickName ? 'skl-icon-check' : 'skl-icon-pencil'}
                                        onClick={toggleEditNickName}
                                    />
                                </div>
                            </div>
                            <div className="skl-profile__group">
                                <div className="skl-profile__label">University</div>
                                <div className='d-flex gap-1'>
                                    <Select data={universityList} onChange={onUniversityChange} value={university} disabled={!isEditUniversity}>test</Select>
                                    <IconButton
                                        icon={isEditUniversity ? 'skl-icon-check' : 'skl-icon-pencil'}
                                        onClick={toggleEditUniversity}
                                    />
                                </div>
                            </div>
                            <div className="skl-profile__group">
                                <div className="skl-profile__label">Gender</div>
                                <div className='d-flex gap-1'>
                                    <Select data={genderList} onChange={onGenderChange} value={gender} disabled={!isEditGender}></Select>
                                    <IconButton
                                        icon={isEditGender ? 'skl-icon-check' : 'skl-icon-pencil'}
                                        onClick={toggleEditGender}
                                    />
                                </div>
                            </div>
                            <div className="skl-profile__group">
                                <div className="skl-profile__label">Date of birth</div>
                                {birthday !== '' &&
                                    <DatePicker defaultValue={dayjs(birthday, dateFormat)} className="skl-date-picker" placeholder="Click to select your birthday" onChange={onChange} />
                                }
                            </div>

                            <div className='d-flex justify-content-end mt-4'>
                                <Button onClick={handleUpdateProfile}>Save</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

Profile.layout = AppLayout

export default Profile;
export async function getServerSideProps(context: any) {
    const user = context.req.cookies.access_token;
    if (user === undefined) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}
