// import Header from './Header';
import Spline from '@splinetool/react-spline';
import {useState} from "react";
import {IoCodeWorking, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoMenu} from 'react-icons/io5';
import jishan from './pictures/jam.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const[isActive,setIsActive]=useState(false);


  return (
    <>
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
  
     <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w-880 bg-primary p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">Developer Jishan</p>

        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
       <a href='#home'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>

       <a href='#about'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>

       <a href='#projects'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
       <a href='#contact'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>

      <a href='https://docs.google.com/document/d/1t-ANlBvzWDO5MWEBcVsqv64FvtTQOiIR/edit?usp=sharing&ouid=118251495260429436037&rtpof=true&sd=true'className=" ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-grey-100 duration-100 ease-in-out">Download</a>
        </div>
        <div className="block md:hidden ml-auto cursor-pointer" onClick={()=>setIsActive(!isActive)}>
      <IoMenu className='text-2xl text-textBase' />
      </div>
      {isActive && (
        <div className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>

<a href='#home'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>

<a href='#about'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>

<a href='#projects'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
<a href='#contact'className="text-lg text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>

<a href='https://docs.google.com/document/d/1t-ANlBvzWDO5MWEBcVsqv64FvtTQOiIR/edit?usp=sharing&ouid=118251495260429436037&rtpof=true&sd=true'className=" ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-grey-100 duration-100 ease-in-out">Download</a>
        </div>
      )}
      </div>
     </nav>
    
    <Spline scene="https://prod.spline.design/sZzUdQWfZeES3-ds/scene.splinecode"/>
    <div className="absolute bottom-10 w-full justify-center items-center flex">
      <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
        <p className="text-textBase">Press and drag to orbit</p>
      </div>
    </div>
        </div>
    <main className='w-[100%] mt-5 bg-Primary'>
      <section className='w-full grid grid-cols-1 md:grid-col-2 gap-4 my-24' id='about'>
        <div className='w-full h-200 flex items-center justify-center'>
          <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
            <img src={jishan} className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl" alt=''/>
          </div>
        </div>   
        <div className='w-full h-420 flex flex-col items-center justify-center'>
          <p className='text-lg text-textBase text-center'>
        Hi there my name is Jishan Ali Mondal."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </p>
          <button className='w-full md:auto items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 rounded-lg focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover'>Download</button>
          </div> 
      </section>
      <section className='w-full justify-center items-center flex '>
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoCodeWorking/>}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
      </VerticalTimeline>
      </section>
      <section className='flex flex-wrap items-center justify-evenly my-24 gap-4'>
        <div className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duraion-100 ease-in-out'>
          <p className='text-lg text-textBase font-medium uppercase'>JISHAN</p>
          <img src={jishan} className='w-full rounded-md my-4'/>
          <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-300'>Technologies
            <span className='block text-sm to-gray-500'>
              Html,Css,Javascript,ReactJs
            </span>
            </p>
            <a href='https://github.com/Abhi123mondal'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer'/>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id='contact' className='flex flex-col items-center justify-center w-full my-24'>
        <p className='text-2xl text-gray-400 capitalize'>Follow me on </p>
        <div className='flex flex-center justify-center w-full my-4 flex-wrap gap-4'>
          <a href="https://github.com/Abhi123mondal" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoGithub className='text-textBase text-3xl corsor-pointer'/>
            <p className='text-lg text-textBase'>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/jishan-mondal-a1336420a" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoLinkedin className='text-blue-900 text-3xl corsor-pointer'/>
            <p className='text-lg text-textBase'>Linkedin</p>
          </a>
          <a href="#" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoWhatsapp className='text-green-900 text-3xl corsor-pointer'/>
            <p className='text-lg text-textBase'>Whatsapp</p>
          </a>
          <a href="#" className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
            <IoLogoInstagram className='text-pink-900 text-3xl corsor-pointer'/>
            <p className='text-lg text-textBase'>Instagram</p>
          </a>
        </div>
      </section>
    </main>
    
   
    </>
  );
}

export default App;

