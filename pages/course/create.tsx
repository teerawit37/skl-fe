import Head from 'next/head'
import Image from 'next/image'
import { TimePicker } from 'antd';
import { useEffect, useState } from 'react';
import { Button, IconButton } from '../../components/Button';
import { Input } from '../../components/Input';
import { AppLayout } from '../../components/Layout';
import { Upload, UploadProfile } from '../../components/Upload';
import { Select } from '../../components/Select';
import { useInput } from '../../hooks/useInput';
import UserService from '../../services/user.service';
import { convertToBase64 } from '../../utils/file';
import CourseService from '../../services/course.service';
import Router, { useRouter } from 'next/router';
import { useArray } from '../../hooks/useArray';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { toast } from 'react-toastify';


const categoryList = [
    {
        label: 'Science',
        value: 'science'
    },
    {
        label: 'Technology',
        value: 'technology'
    },
    {
        label: 'Programming',
        value: 'programming'
    },
    {
        label: 'Data Science',
        value: 'datascience'
    },
    {
        label: 'UX/UI',
        value: 'ux/ui'
    },
]

type RangeValue = [Dayjs | null, Dayjs | null] | null;

dayjs.extend(customParseFormat);

function CreateCourse() {
    const router = useRouter()
    const [id, setId] = useState<string>('')
    const [img, setImg] = useState<string>('')
    const [banner, setBanner] = useState<string>('')
    const { value: title, onChange: onTitleChange } = useInput('');
    const { value: description, onChange: onDescriptionChange } = useInput('');
    const { value: category, onChange: onCategoryChange, setInitailValue: setCategory } = useInput('science');

    // user
    const { value: firstname, setInitailValue: setFirstName } = useInput('');
    const { value: lastname, setInitailValue: setLastName } = useInput('');
    const { value: nickname, setInitailValue: setNickname } = useInput('');
    const { value: university, setInitailValue: setUniversity } = useInput('');
    const { value: role, setInitailValue: setRole } = useInput('');

    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');

    const fetchProfile = () => {
        UserService.getProfile().then(
            (res) => {
                const data = res.data[0];
                setFirstName(data.firstname)
                setLastName(data.lastname)
                setNickname(data.nickname)
                setUniversity(data.university)
                setRole(data.role)
                setId(data._id)
                setImg(data.img)
            }
        )
    }

    const handleCreateCourse = () => {
        if (img === '' || firstname === '') {
            toast.error("Please input your profile infomation before create course.");
            router.push('/profile')
        } else {
            const payload = {
                img,
                title,
                description,
                instructor: firstname + ' ' + lastname,
                university,
                banner,
                category,
                start,
                end,
            }
            CourseService.createCourse(payload).then(
                () => {
                    toast.success("Course created");
                    router.push('/course')
                }
            )
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const onImageChange = async (e: any) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            const base64 = await convertToBase64(img);
            setBanner(base64 as string)
        }
    };

    const onTimeChange = (time: RangeValue) => {
        if (time !== null) {
            const time_start = dayjs(time[0]).format('h:mm a')
            const time_end = dayjs(time[1], "h:mm a").format('h:mm a')
            setStart(time_start)
            setEnd(time_end)
        }
    };

    return (
        <div className="skl-create">
            <div className='container'>
                {/* profile */}
                <section className='my-4'>
                    <div className="skl-create__title">Create Course</div>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='skl-create__container'>
                            <div className="skl-create__group mt-4">
                                <div className="skl-create__label">Course Name</div>
                                <Input
                                    placeholder={'Course Name'}
                                    value={title}
                                    onChange={onTitleChange} />
                            </div>
                            <div className="skl-create__group">
                                <div className="skl-create__label">Description</div>
                                <textarea
                                    className="skl-create__text-aria"
                                    id="course-desc"
                                    name="description"
                                    value={description}
                                    onChange={onDescriptionChange}
                                    rows={4}
                                    cols={50}></textarea>
                            </div>
                            <div className="skl-create__group">
                                <div className="skl-create__label">Banner</div>
                                <Upload value={banner} defalut={''} onChange={onImageChange}></Upload>
                            </div>
                            <div className="skl-create__group">
                                <div className="skl-create__label">Category</div>
                                <Select data={categoryList} onChange={onCategoryChange} value={category}></Select>
                            </div>
                            <div className="skl-create__group">
                                <div className="skl-create__label">Select Time</div>
                                {/* {time} */}
                                <TimePicker.RangePicker format="h:mm a" onChange={onTimeChange} className='skl-create__time-picker' />
                            </div>
                            <div className='d-flex justify-content-end mt-4'>
                                <Button onClick={handleCreateCourse}>Create</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

CreateCourse.layout = AppLayout

export default CreateCourse;

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
    if (user.role === 'student') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {}, // will be passed to the page component as props
    }
}
