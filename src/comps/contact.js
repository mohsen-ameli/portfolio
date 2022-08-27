import Container from "./container";
import Item from "./item";
import Title from "./title";

const Contact = () => {
  return (
    <Container className="pt-24">
      <Title title="Contact Me!" />

      <Item>
        <form className="mx-auto mt-8 w-full flex flex-col max-w-[600px]" action="https://getform.io/f/d38815a8-e28e-454a-9f56-4067493deb2f" method="POST">
          <div className="mb-4 flex items-center w-full">
            <Input text="name" className="w-full mr-4" />
            <Input text="email" className="w-full" title="Please enter a valid email address." pattern="[a-zA-Z0-9.-_+]+@+[a-zA-Z0-9-_+]+\.[a-z]{2,}" />
          </div>
          <Input text="message" className="pb-40" autoComplete="off" />

          <Item className="self-center">
            <button type="submit" className="w-fit cursor-pointer mt-8 py-2 px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150">
              Submit!
            </button>
          </Item>
        </form>
      </Item>
    </Container>
  );
}

const Input = ({ text, className, ...props }) => {
  return (
    <input className={`bg-sky-900 outline-none p-2 placeholder:capitalize focus:placeholder:text-transparent ${className}`} type={text} name={text} placeholder={text} required {...props} />
  )
}
 
export default Contact;