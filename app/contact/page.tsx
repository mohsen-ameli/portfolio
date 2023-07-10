"use client"

import AnimatedDiv from "@/components/AnimatedDiv"
import React, { useRef, useState } from "react"
import Input from "./input"
import JSConfetti from "js-confetti"

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null!)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    // Honey pot for bots
    if (form.get("favorite_color")) {
      return
    }

    // set submitted
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)

    // confetti
    new JSConfetti().addConfetti({
      confettiNumber: 200,
      confettiRadius: 5,
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      emojiSize: 20,
    })

    const body = JSON.stringify({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    })

    // reset form
    formRef.current.reset()

    // send mail form
    await fetch("https://getform.io/f/d38815a8-e28e-454a-9f56-4067493deb2f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    })
  }

  return (
    <form
      className="mx-auto mt-8 w-full flex flex-col max-w-[600px]"
      onSubmit={handleSubmit}
      ref={formRef}
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
      <input type="hidden" name="favorite_color" value="" />
      <AnimatedDiv className="self-center">
        <button
          type="submit"
          className="w-[200px] cursor-pointer mt-8 py-2 px-4 flex items-center justify-center btn font-semibold text-[#FF5F1F] border-2 border-[#FF5F1F] rounded-lg hover:bg-[#FF5F1F] hover:text-white hover:scale-105 duration-150"
          disabled={submitted}
        >
          {submitted ? (
            <span className="w-full text-green-500">✓</span>
          ) : (
            <h1 className="w-full">Submit!</h1>
          )}
        </button>
      </AnimatedDiv>
    </form>
  )
}

export default Contact
