import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { AppLayout } from '../components/Layout'
import jwt from 'jwt-decode'
import { cookieParser } from '../utils/cookie'

export interface IPageProps {
  username: string,
  role: string,
}

function Home(user: IPageProps) {
  const { username } = user;
  return (
    <div className="skl-home">
      <div className='container'>
        <div className='skl-home__title'>Hi, {username}</div>
        <div className='skl-home__container'>
          <h5 className='skl-home__ex-title'>Test for software engineer candidates</h5>

          <p className='skl-home__paragraph'>Please implement a website following the requirements below. Good luck!</p>

          <p className='skl-home__paragraph skl-home__paragraph--bold'>Requirements and specifications</p>
          <li className='skl-home__paragraph'>This project is a course management system</li>
          <li className='skl-home__paragraph'>This system need to have 2 roles of membership, every user able to update first name, last name, nickname, birthday, gender</li>
          <ul>
            <li className='skl-home__paragraph skl-home__paragraph--bold'>Student</li>
            <li className='skl-home__paragraph skl-home__paragraph--bold'>Instructor</li>
          </ul>
          <li className='skl-home__paragraph'>Need to have login page for fill username, password for access into the system, it should not allow pages for guests</li>
          <p className='skl-home__paragraph skl-home__paragraph--bold'>Student</p>
          <li className='skl-home__paragraph'>able to search course by time, name that user looking for</li>
          <li className='skl-home__paragraph'>don&apos;t allow to create course</li>
          <p className='skl-home__paragraph skl-home__paragraph--bold'>Instructor</p>
          <li className='skl-home__paragraph'>able to search course by time, name for check existed courses</li>
          <li className='skl-home__paragraph'>able to create course by fill name, description, category, image, subject, start-end time, number of student</li>
          <li className='skl-home__paragraph'>Display course card look like example image below document and change layout when change to mobile site</li>
          <li className='skl-home__paragraph'>Use React JS for implement frontend</li>
          <li className='skl-home__paragraph'>Use React Hook Lifecycle</li>
          <li className='skl-home__paragraph'>Can use Javascript or Typescript</li>
          <li className='skl-home__paragraph'>Use Redux for store data</li>
          <li className='skl-home__paragraph'>Layout support Pc, Ipad, Mobile size</li>
          <li className='skl-home__paragraph'>Use Node JS or Ruby on Rails for implement API</li>
          <li className='skl-home__paragraph'>You can use your favour DB whether is a SQL or NOSQL</li>
          <li className='skl-home__paragraph'>For design part please use css framework such as bootstrap/ant-design/material-ui or your favour framework for initial part of design</li>
          <li className='skl-home__paragraph'>Design a database to fit with this requirement</li>
          <li className='skl-home__paragraph'>Deploy your code into whatever cloud service platform your favour</li>

          <p className='skl-home__paragraph skl-home__paragraph--bold'>Evaluate your score from the following topics</p>
          <li className='skl-home__paragraph'>Complete all requirements</li>
          <li className='skl-home__paragraph'>Maintananceable Code (for yourself and other)</li>
          <li className='skl-home__paragraph'>Use correct React Lifecycle and Redux</li>
          <li className='skl-home__paragraph'>Design a database in principle</li>
          <li className='skl-home__paragraph'>Special bonus points: use special techniques to make the website support a large number of users and large data. When sending your test, tell me what techniques you use.</li>


          <p className='skl-home__paragraph skl-home__paragraph--bold'>Action Required</p>
          <li className='skl-home__paragraph'>Send your code via link of git provider</li>
          <li className='skl-home__paragraph'>URL your website</li>
          <li className='skl-home__paragraph'>IP, username, password for connect DB</li>

        </div>
      </div>
    </div>
  )
}

Home.layout = AppLayout
export default Home;

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
