"use client"

import AnimatedDiv from "@/components/ui/AnimatedDiv"
import Container from "@/components/ui/Container"
import Title from "@/components/ui/Title"
import React from "react"
import Input from "./input"

const Contact = () => {
  return (
    <Container className="pt-24">
      <Title title="Contact Me!" />

      <form
        className="mx-auto mt-8 w-full flex flex-col max-w-[600px]"
        action="https://getform.io/f/d38815a8-e28e-454a-9f56-4067493deb2f"
        method="POST"
      >
        <AnimatedDiv>
          <div className="mb-4 flex items-center w-full">
            <Input text="name" className="w-full mr-4" />
            <Input
              text="email"
              className="w-full"
              title="Please enter a valid email address."
              pattern="[a-zA-Z0-9.-_+]+@+[a-zA-Z0-9-_+]+\.[a-z]{2,}"
            />
          </div>
          <textarea
            placeholder="message"
            className="bg-sky-900 w-full rounded-md outline-none p-2 placeholder:capitalize focus:placeholder:text-transparent pb-40 resize-y"
            autoComplete="off"
            name="message"
          />
        </AnimatedDiv>
        <AnimatedDiv className="self-center">
          <button
            type="submit"
            className="w-fit cursor-pointer mt-8 py-2 px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150"
          >
            Submit!
          </button>
        </AnimatedDiv>
      </form>
    </Container>
  )
}

export default Contact
