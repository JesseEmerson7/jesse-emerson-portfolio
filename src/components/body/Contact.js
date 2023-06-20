import '../../assets/css/contact.css'

export default function Contact() {


  return (
    <>
    <section className=' text-black  flex flex-col justify-center gap-10'>
      <h1 className='mx-auto mt-5 text-2xl font-semibold '>Feel free to contact me and I will get back to you as soon as possible!</h1>
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
