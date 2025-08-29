import Link from 'next/link';

function Not_Found() {
  return (
    <main className='main-wrapper relative overflow-hidden'>
      {/*...::: 404 Section Start :::... */}
      <section id='404-section'>
        {/* Section Spacer */}
        <div className='py-40 pt-36 xl:pb-[200px] xl:pt-[180px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* 404 Content */}
            <div className='mx-auto max-w-[954px] text-center'>
              <h1 className='bg-[url(/assets/img_placeholder/th-1/404-text-image.jpg)] bg-contain bg-clip-text bg-center bg-no-repeat text-[150px] text-transparent sm:text-[220px] lg:text-[300px] xl:text-[350px]'>
                404
              </h1>
              <h2 className='mb-[50px]'>
                This page is either missing or was never built.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href='/'
                  className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Back to Homepage
                </Link>
                <Link
                  href='/services'
                  className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  See All Services
                </Link>
              </div>
            </div>
            {/* 404 Content */}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: 404 Section End :::... */}
    </main>
  );
}

export default Not_Found;