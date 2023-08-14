"use client"
import React from "react"
import { useQuestionContext } from "@/Contexts/QuestionContext"
import { twMerge } from "tailwind-merge"

const NewTest = () => {
  const {
    data,
    currentPage,
    handleSelected,
    HandleNext,
    HandlePrev,
    CalcTotal,
    total,
    Loading,
    showResult,
    disabledOpt,
    previewOption,
    HandlePreview,
    HandleTryAgain,
  } = useQuestionContext()
  return (
    <div className="w-[100%] mx-auto md:mx-0 mt-[20px] md:w-[70%] h-[400px] md:h-[380px] rounded-xl bg-[#060224] flex flex-col gap-2 p-2 relative lg:pl-[20px] shadow-lg shadow-black">
      {currentPage < 6 && (
        <>
          {/* Questions */}
          <div className="w-full">
            {data.map((section) => (
              <div key={section.id} className={`w-full flex flex-col gap-2 `}>
                {/* Main Question */}
                {section.id === currentPage && (
                  <div className="">
                    <p className="mb-[10px]">
                      {section.id}. <span>{section.question}</span>
                    </p>
                  </div>
                )}
                {/* Sub Question */}
                {section.id === currentPage && (
                  <div className="h-[120px]">
                    {section.codeSnippet.map((snippet, ind) => (
                      <p key={ind} className="textGray pt-1 ">
                        {snippet}
                      </p>
                    ))}
                  </div>
                )}

                {/*Options  */}
                {section.id === currentPage && (
                  <div className="w-full mt-[20px] grid grid-cols-2 grid-rows-2 gap-3 place-centent-center">
                    {section.options.map((opt) => (
                      <button
                        disabled={disabledOpt}
                        key={opt.id}
                        className={twMerge(
                          "transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg w-[100%] lg:w-[65%] h-[40px] lg:h-[45px] textGray bg-[#312e42] text-[10px] line-height:[6px] md:text-xs border-[2px] border-transparent hover:opacity-80 flex items-center justify-items-start gap-1 px-2 py-1 hover:border-[#35acf7] group",
                          opt.isSelected &&
                            "border-[2px] border-[#35acf7] bg-zinc-600",
                          !opt.isSelected && "border-transparent",
                          previewOption &&
                            opt.isCorrect &&
                            "border-[2px] border-green-500 bg-green-700 text-white",
                          previewOption &&
                            !opt.isCorrect &&
                            opt.isSelected &&
                            "border-[2px] border-red-500 bg-red-600 text-white",
                          disabledOpt && "cursor-not-allowed"
                        )}
                        onClick={() => handleSelected(section.id, opt.id)}
                      >
                        <p
                          className={`${
                            opt.isSelected ? "bg-[#35acf7] text-white" : " "
                          } transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 bg-[#060224] py-1 px-2 rounded-full group-hover:bg-[#35acf7] group-hover:text-white`}
                        >
                          {opt.pos}
                        </p>
                        {opt.option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* -------------------#QUESTION ENDS HERE----------------------------- */}
          </div>

          {/* Toggle Next and Prev Buttons */}
          <div className=" w-[100%] md:w-[50%]  mx-auto mt-4 flex items-center justify-between">
            {/* Previous Button */}
            <button
              disabled={currentPage === 1}
              onClick={HandlePrev}
              className={`${
                currentPage === 1
                  ? "cursor-not-allowed opacity-40"
                  : "hover:border-[#35acf7] hover:opacity-70 hover:text-[#35acf7]"
              } border-2 border-transparent bg-[#312e42] py-2 px-6 rounded-lg textWhite group hover:border-[2px] border-[#a1a0b8] `}
            >
              Prev
            </button>
            {/* Next Button */}
            {currentPage < 5 && (
              <button
                onClick={HandleNext}
                className="border-2 border-transparent bg-[#312e42] py-2 px-6 rounded-lg textWhite group hover:border-[2px] border-[#a1a0b8] hover:border-[#35acf7] hover:opacity-70 hover:text-[#35acf7]"
              >
                Next
              </button>
            )}

            {/* Submit Button */}
            {currentPage === 5 && (
              <button
                onClick={CalcTotal}
                className="border-2 border-transparent bg-[#312e42] py-2 px-6 rounded-lg textWhite group hover:border-[2px] border-[#a1a0b8] hover:border-[#35acf7] hover:opacity-70 hover:text-[#35acf7]"
              >
                submit
              </button>
            )}
          </div>
        </>
      )}

      {currentPage === "TotalPage&Preview" && (
        <>
          <div className="w-full flex flex-col items-center justify-center h-full">
            {Loading ? (
              <h1 className="text-lg">Loading...</h1>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-bold -tracking-wide">
                  TOTAL SCORE: {total}{" "}
                </h1>

                {/* PreviewButton && TryAgainButton*/}
                <div className="w-[100%] md:w-[100%]  mx-auto mt-4 flex items-center justify-evenly gap-6">
                  {/* preview */}
                  <button
                    className="border-2 border-transparent bg-[#312e42] py-2 px-6 rounded-lg textWhite group hover:border-[2px] border-[#a1a0b8] hover:border-[#35acf7] hover:opacity-70 hover:text-[#35acf7]"
                    onClick={HandlePreview}
                  >
                    Preview
                  </button>
                  {/* Try Again */}
                  <button
                    onClick={HandleTryAgain}
                    className="border-2 border-transparent bg-[#312e42] py-2 px-6 rounded-lg textWhite group hover:border-[2px] border-[#a1a0b8] hover:border-[#35acf7] hover:opacity-70 hover:text-[#35acf7] whitespace-nowrap"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default NewTest

{
  /* <div>
className={`${
                          opt.isSelected
                            ? "border-[2px] border-[#35acf7] bg-zinc-600"
                            : "border-transparent "
                        } ${
                          previewOption &&
                          opt.isCorrect &&
                          "border-[2px] border-green-500 bg-green-700 text-white"
                        }  ${
                          previewOption &&
                          !opt.isCorrect &&
                          opt.isSelected &&
                          "border-[2px] border-red-500 bg-red-600 text-white"
                        } ${
                          disabledOpt && "cursor-not-allowed"
                        } transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 rounded-lg w-[100%] lg:w-[65%] h-[40px] lg:h-[45px] textGray bg-[#312e42] text-[10px] line-height:[6px] md:text-xs border-[2px] border-transparent hover:opacity-80 flex items-center justify-items-start gap-1 px-2 py-1 hover:border-[#35acf7] group`}
</div> */
}
