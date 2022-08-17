const Contact = () => {
  return (
    <div name="contact" className="w-full h-full py-60 px-4 max-w-[1000px] mx-auto text-white flex flex-col items-center">
      <h1 className="w-fit py-4 mb-6 text-5xl font-bold border-b-4 border-[#FF5F1F]">Contact Me!</h1>

      <form className="w-full flex flex-col max-w-[600px]" action="https://getform.io/f/d38815a8-e28e-454a-9f56-4067493deb2f" method="POST">
        <input className="bg-sky-900 outline-none p-2 my-4" type="name" name="name" placeholder="Name" required />
        <input className="bg-sky-900 outline-none p-2 my-4" type="email" name="email" placeholder="Email" required />
        <input autoComplete="off" className="bg-sky-900 outline-none p-2 pb-24 my-4" type="message" name="message" placeholder="Message" required />
        <button type="submit" className="w-fit self-center cursor-pointer m-4 py-2 px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
          Submit!
        </button>
      </form>
    </div>
  );
}
 
export default Contact;