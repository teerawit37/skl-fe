import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { AppLayout } from '../components/Layout'
import { useSession } from '../hooks/useSession';

function Home() {
  return (
    <div className="skl-home">
      <div className='container'>
        <div className='skl-home__title'>Hi, Thirawit</div>
        <code className='mt-4'>
          <h5>Test for software engineer candidates</h5>

          <p>Please implement a website following the requirements below. Good luck!</p>

          <p>Requirements and specifications</p>
          <p>This project is a course management system</p>
          <p>This system need to have 2 roles of membership, every user able to update first name, last name, nickname, birthday, gender</p>
          <p>Student</p>
          <p>Instructor</p>
          <p>Need to have login page for fill username, password for access into the system, it should not allow pages for guests</p>
          <p>Student</p>
          <p>able to search course by time, name that user looking for</p>
          <p>don't allow to create course</p>
          <p>Instructor</p>
          <p>able to search course by time, name for check existed courses</p>
          <p>able to create course by fill name, description, category, image, subject, start-end time, number of student</p>
          <p>Display course card look like example image below document and change layout when change to mobile site</p>
          <p>Use React JS for implement frontend</p>
          <p>Use React Hook Lifecycle</p>
          <p>Can use Javascript or Typescript</p>
          <p>Use Redux for store data</p>
          <p>Layout support Pc, Ipad, Mobile size</p>
          <p>Use Node JS or Ruby on Rails for implement API</p>
          <p>You can use your favour DB whether is a SQL or NOSQL</p>
          <p>For design part please use css framework such as bootstrap/ant-design/material-ui or your favour framework for initial part of design</p>
          <p>Design a database to fit with this requirement</p>
          <p>Deploy your code into whatever cloud service platform your favour</p>

          <p>Evaluate your score from the following topics</p>
          <p>Complete all requirements</p>
          <p>Maintananceable Code (for yourself and other)</p>
          <p>Use correct React Lifecycle and Redux</p>
          <p>Design a database in principle</p>
          <p>Special bonus points: use special techniques to make the website support a large number of users and large data. When sending your test, tell me what techniques you use.</p>


          <p>Action Required</p>
          <p>Send your code via link of git provider</p>
          <p>URL your website</p>
          <p>IP, username, password for connect DB</p>

        </code>
      </div>
    </div>
  )
}

Home.layout = AppLayout
export default Home;

export async function getServerSideProps(context: any) {
  console.log(context.req.cookies)
  return {
    props: {}, // will be passed to the page component as props
  }
}
