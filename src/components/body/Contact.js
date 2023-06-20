import '../../assets/css/contact.css'

export default function Contact() {


  return (
    <>
    <div id='hero-image' className='flex justify-start'>
    <h1 className='text-2xl font-semibold mt-10 ml-5 hero-text h-min p-2 md:p-4 rounded-xl text-white '>Contact Info</h1>
    </div>
    <section className=' text-black  flex flex-col justify-center gap-10'>
      
      <div className='px-20'>
        {/* phone */}
        <h2>
          Cell Phone: <a>407-687-2391</a>
        </h2>
      </div>
      {/* email */}
      <div className='px-20'>
        Email: <a href='mailto:jesseemerson7@gmail.com'>jesseemerson7@gmail.com</a>
      </div>
    </section>
    </>
  );
}
