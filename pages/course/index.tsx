import Head from 'next/head'
import Image from 'next/image'
import { FloatButton } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { AppLayout } from '../../components/Layout'
import { useInput } from '../../hooks/useInput'
import CourseService from '../../services/course.service';
import { useRouter } from 'next/router';
import { IPageProps } from '../index';
import { cookieParser } from '../../utils/cookie';

function Course(user: IPageProps) {
    const { username, role } = user;
    const router = useRouter()
    const { value, onChange } = useInput('');
    const [courseList, setCourseList] = useState<any>([])
    const [fullCourseList, setFullCourseList] = useState<any>([])

    const searchData = () => {
        if (value !== '') {
            const res = fullCourseList.filter((obj: any) => Object.values(obj).some((val: any) => val.toString().toLowerCase().includes(value.toLowerCase())));
            setCourseList(res)
        } else {
            setCourseList(fullCourseList)
        }
    }

    const fetchCourseList = () => {
        CourseService.getCourseList().then(
            (res) => {
                setFullCourseList(res.data)
                setCourseList(res.data)
            }
        )
    }

    useEffect(() => {
        fetchCourseList();
    }, [])

    useEffect(() => {
        searchData();
    }, [value])

    const RenderList = (courseList: any[]) => {
        if (courseList.length > 0) {
            return (
                <div className='row my-4'>
                    {courseList.map((item: any, index: any) => (
                        <div key={index} className='col-12 col-lg-3'>
                            <Card {...item}></Card>
                        </div>
                    ))}

                </div>
            )
        } else {
            return (
                <div className='skl-course__not-found-container my-4'>
                    <div className="skl-course__not-found-title">No matching items found</div>
                    <div className="skl-course__not-found-title skl-course__not-found-title--sub">Try changing your seach criteria</div>
                </div>
            )
        }
    }

    return (
        <div className="skl-course">
            <div className='container'>

                {/* course */}
                <section className='my-4'>
                    <div className='skl-course__head-container'>
                        <div className="skl-course__title">Course</div>
                        <div className='skl-course__search-container'>
                            <Input icon="skl-icon-search" onChange={onChange} value={value} placeholder="search"></Input>
                        </div>
                    </div>
                    {RenderList(courseList)}
                </section>
                {role !== 'student' &&
                    <FloatButton
                        onClick={() => router.push('/course/create')}
                        className='skl-course__float-btn'
                        tooltip={<div>Create Course</div>} />
                }
            </div >
        </div >
    )
}

Course.layout = AppLayout

export default Course;

export async function getServerSideProps(context: any) {
    const user = cookieParser(context.req.cookies.access_token);
    if (user === undefined) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }
    return {
        props: user, // will be passed to the page component as props
    }
}
