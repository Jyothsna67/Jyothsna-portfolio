import { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from "@react-three/fiber";
// import { Fox }  from "../models/Fox";
// import { Loader } from '../components/Loader';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message:''})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      process.env.VITE_APP_EMAILJS_SERVICE_ID,
      process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Jyothsna",
        from_email: form.email,
        to_email: 'peddintijyothsna06@gmail.com',
        message: form.message
      },
      process.env.VITE_APP_EMAILJS_USER_ID,
    ).then(() => {
      setIsLoading(false);
      //TODO: Show success message
      //TODO: Hide an alert

      setForm({ name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      //TODO: show error message
    })
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semobold'>
            Name
            <input
            type="text"
            name="name"
            className='input'
            placeholder='john'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semobold'>
            Email
            <input
            type="email"
            name="email"
            className='input'
            placeholder='john@gmail.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semobold'>
            Your message
            <textarea
            name="message"
            rows={4}
            className='textarea'
            placeholder='Let me know how I can help you!'
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button
          type='submit'
          className='btn'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? 'sending...' : 'send message'}
          </button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        {/* <Canvas
          camera={{
            position: [0, 0, 5]
          }}
        >
          <Suspense fallback={Loader}>
            <Fox 
            position={[0.5, 0.35, 0]}/>
          </Suspense>

        </Canvas> */}

      </div>

    </section>
  )
}

export default Contact