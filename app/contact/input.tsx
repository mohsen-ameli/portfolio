type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  text: string
  className: string
}

const Input = ({ text, className, ...props }: InputProps) => {
  return (
    <input
      className={`bg-sky-900 rounded-md outline-none p-2 placeholder:capitalize focus:placeholder:text-transparent ${className}`}
      type={text}
      name={text}
      placeholder={text}
      required
      {...props}
    />
  )
}

export default Input
