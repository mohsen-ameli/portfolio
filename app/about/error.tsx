"use client"

import { useEffect } from "react"

type ErrorProps = { error: Error; reset: () => void }

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <div>Something went wrong!</div>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default Error
