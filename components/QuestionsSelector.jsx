"use client"
import React from "react"
import { useQuestionContext } from "@/Contexts/QuestionContext"

const QuestionsSelector = () => {
  const { data, currentPage, SelectQuestion } = useQuestionContext()

  return (
    <div className="mt-[30px] md:absolute top-0 left-[-40px] w-[75%] md:w-[25%] h-[150px] md:h-[250px] rounded-xl bg-[#060224] grid grid-cols-5 grid-rows-5 py-4 px-3 gap-4 place-items-center shadow-lg shadow-black">
      {data.map((val) => (
        <button
          onClick={() => SelectQuestion(val.id)}
          key={val.id}
          className={`${
            currentPage === val.id ? " bg-rose-700 text-white font-bold" : ""
          } ${
            val.onSelected ? "bg-yellow-500 border-red-600" : " "
          } px-3 mt-[10px] py-[6px] text-xs flex items-center justify-center rounded-[100%] border border-transparent textWhite bg-[#312e42] hover:translate-y-[-8px] duration-150 ease-in-out`}
        >
          {val.id}
        </button>
      ))}
    </div>
  )
}

export default QuestionsSelector
