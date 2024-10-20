import vid from '../assets/bg1.mp4'
const VideoBacCmp = () =>{
  return(
    <>
        <video width='100%' height='100%' autoPlay loop muted>
            <source src={vid} type="video/mp4" />
        </video>
    </>
  )
}

const Home = () => {
  return (
    <>
    <div  id='home'>
      
        <div className='bg-img  row'>
          <VideoBacCmp />
        </div>


      <div className='info' >
        <h3 className='text-center'>Fitenss <span className='text-info'>wonder</span></h3>
        <p>From cardio machines to free weights, our gym has everything you need to get fit. Get personalized guidance from our expert trainers to achieve your goals faster.We offer plans that fit your schedule and budget, with no long-term contracts!</p>
       <div className='text-center mb-3'><button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Enquiry</button></div>
      </div>
    </div>
    </>
  )
}

export default Home
