import Image from 'next/image'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Homepage() {
  return (
    <div className='relative   bg-slate-900 font-poppins-regular'>
      <div className='fixed z-50 w-full bg-slate-900'>
        <Header />
      </div>
      <div className='no-scrollbar flex flex-col text-center text-[#d0d1d5] '>
        <div className='flex h-full  w-full flex-col items-center justify-center gap-4 py-20 px-4 md:gap-6 md:px-10'>
        <Image
              src='/logo.jpeg'
              alt='logo'
              className='lazyloaded rounded-xl '
              data-ll-status='loaded'
              width={50}
              height={50}
            />
          <div>
            <h1 className='animate-pulse bg-gradient-to-r from-[#d5bd25]  via-[#dd0d4b] to-[#341ce5] bg-clip-text pb-4 pr-2 text-[40px] font-[900] capitalize text-transparent md:text-[55px]'>
              Jhainelle’s Beauty Palace
            </h1>
          </div>
          <div id='about'>
            <h1 className=' text-sm font-[500] md:text-[20px]'>
              We offer good makeup services, Good looks is our piority as well as customers
              satisfaction.
            </h1>
          </div>

          
          <div>
            <h1 className=' text-sm md:text-[20px]'>Follow Us On Social Media</h1>
          </div>
          <div>
            <div className='flex flex-row gap-4 '>
              <a href=''>
                <div className=' rounded-full bg-slate-700 p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-7 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/></svg>
                </div>
              </a>
              <a href=''>
                <div className='rounded-full bg-slate-700 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-7 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138V9z"/></svg>
                </div>
              </a>
              <a href='tel:08134765916'>
                <div className=' rounded-full bg-slate-700 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                </div>
              </a>
              
              <a href='mailto:janeakinyele@gmail.com'>
                <div className=' rounded-full bg-slate-700 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-7 w-7 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/></svg>
                </div>
              </a>
              
            </div>
          </div>
        </div>
      
      <div id='#testimonies'>
      <div className=' justify-center flex gap-2 items-center pb-3'>
        <h1>Testimonies</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M10 7.22L6.603 10H3v4h3.603L10 16.78V7.22zM5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm13.517 4.134l-1.416-1.416A8.978 8.978 0 0 0 21 12a8.982 8.982 0 0 0-3.304-6.968l1.42-1.42A10.976 10.976 0 0 1 23 12c0 3.223-1.386 6.122-3.594 8.134zm-3.543-3.543l-1.422-1.422A3.993 3.993 0 0 0 16 12c0-1.43-.75-2.685-1.88-3.392l1.439-1.439A5.991 5.991 0 0 1 18 12c0 1.842-.83 3.49-2.137 4.591z"/></svg>
          </div>
          <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="Images/1.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/2.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/3.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/4.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/5.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/6.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/7.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/8.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/9.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/10.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/11.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/12.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/13.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  <div className="carousel-item">
    <img src="Images/14.jpeg" className="rounded-box aspect-square h-[40vh] object-cover w-[50vw]" />
  </div> 
  
</div>
         
      </div>
        <div id='services' className='  h-full w-full bg-black/10 p-6'>
        <div className=' justify-center flex gap-2 items-center pb-3'>
        <h1>Services</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M3.161 4.469a6.5 6.5 0 0 1 8.84-.328 6.5 6.5 0 0 1 9.178 9.154l-7.765 7.79a2 2 0 0 1-2.719.102l-.11-.101-7.764-7.791a6.5 6.5 0 0 1 .34-8.826zm1.414 1.414a4.5 4.5 0 0 0-.146 6.21l.146.154L12 19.672l5.303-5.304-3.535-3.535-1.06 1.06a3 3 0 1 1-4.244-4.242l2.102-2.103a4.501 4.501 0 0 0-5.837.189l-.154.146zm8.486 2.828a1 1 0 0 1 1.414 0l4.242 4.242.708-.706a4.5 4.5 0 0 0-6.211-6.51l-.153.146-3.182 3.182a1 1 0 0 0-.078 1.327l.078.087a1 1 0 0 0 1.327.078l.087-.078 1.768-1.768z"/></svg>
          </div>
         
          <div>
            <ul className='steps steps-vertical'>
              <li data-content='✓' className='step step-primary '>
              Makeup
              </li>
              <li data-content='✓' className='step step-primary '>
              Sales of hairs
              </li>
              <li data-content='✓' className='step step-primary '>
              Gele tying
              </li>
              <li data-content='✓' className='step step-primary '>
              Makeup classes
              </li>
              <li data-content='✓' className='step step-primary '>
              Hair dressing
              </li>
              
            </ul>
          </div>
        </div>
        <div className='px-5'>
          <div className=' justify-center flex gap-2 items-center pb-3'>
          <h1>Location</h1>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5 fill-white' ><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
          </div>
          
          <span>Address: Student Villa, After Timbershed Kuje road, Gwagwalada, Abuja</span>
        </div>
        <div className=' py-10 px-6 md:px-20'>
          <div
            id='pricelist'
            className=' h-full w-full rounded-xl bg-gradient-to-r from-[#f0c107] to-[#3318ff] p-[5px]  shadow-2xl  shadow-fuchsia-800'
          >
            <div className='flex flex-col gap-5 rounded-xl   bg-slate-900 py-4'>
            <div className=' justify-center flex gap-2 items-center pb-3'>
            <h1 className='text-lg'>Price list</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className='h-5 w-5 fill-white'><path fill="none" d="M0 0h24v24H0z"/><path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"/></svg>
          </div>
              
              <div className='flex flex-col gap-3 text-[20px]'>
                <h1>Birthday glam : #5,000</h1>
                <h1>Casual look : #4,000</h1>
                <h1>Party glam : #5,500</h1>
                <h1>Gele tying: #1,000</h1>
                <h1>Home service(Within Gwagz): #7,000</h1>
                <h1>Home service (outside Gwagz): #12,000</h1>
                <h1>Bridal makeup (per day): #25,000</h1>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div>
        <Footer />
      </div>
      <a className='fixed bottom-10 right-5' href='https://api.whatsapp.com/send/?phone=09023960932&text=Jhainelle’s+Beauty+Palace&app_absent=0'>
                <div className=' rounded-full bg-slate-700 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-10 w-10 fill-green-500'><path fill="none" d="M0 0h24v24H0z"/><path d="M7.253 18.494l.724.423A7.953 7.953 0 0 0 12 20a8 8 0 1 0-8-8c0 1.436.377 2.813 1.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 0 1-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 0 1-.21.302 2.378 2.378 0 0 1-.33.288 3.71 3.71 0 0 1-.125.09 5.024 5.024 0 0 1-.383.22 1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 0 1 6.9 9.62a2.729 2.729 0 0 1 .564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1z"/></svg>
                </div>
              </a>
    </div>
  )
}

export default Homepage
