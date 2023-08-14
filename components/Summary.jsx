"use client"
import React from "react"
import { useQuestionContext } from "@/Contexts/QuestionContext"

const Summary = () => {
  const { QuestionLength, isAnswered, isSkipped } = useQuestionContext()
  return (
    <div className="-w-full flex flex-col lg:flex-row items-start whitespace-nowrap lg:items-center justify-between textGray mt-[20px] px-4">
      {/* Name  */}
      <p className="w-[35%]"> Stanford University</p>

      {/* Right Side */}
      <div className="containerFlex  justify-evenly gap-2">
        {/* Questions */}
        <p>
          Questions <span className="textBlue">{QuestionLength}</span>{" "}
        </p>

        {/* Answered */}
        <p>
          Answered: <span className="textBlue">{isAnswered}</span>{" "}
        </p>

        {/* Skipped */}
        <p>
          Skipped: <span className="textRed">{isSkipped}</span>{" "}
        </p>

        {/* Finish */}
        <button className="px-3 py-2 textWhite bg-pink-600 rounded-lg hover:opacity-75">
          Finish
        </button>
      </div>
    </div>
  )
}

export default Summary
