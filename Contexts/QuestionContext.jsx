"use client"
import { createContext, useState, useContext, useEffect } from "react"
import Questions from "@/Data/data"

const QuestionContext = createContext()

const QuestionProvider = ({ children }) => {
  const [data, setData] = useState(Questions)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAnswered, setIsAnswered] = useState(0)
  const [isSkipped, setIsSkipped] = useState(0)
  const [total, setTotal] = useState(0)
  const [Loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [previewOption, setPreviewOption] = useState(false)
  const [disabledOpt, setDisabledOpt] = useState(false)

  // Handle Option Selection
  const handleSelected = (id, idx) => {
    const newWays = data.map((items) =>
      items.id === id
        ? {
            ...items,
            onSelected: !items.onSelected,
            options: items.options.map((val) =>
              val.id === idx
                ? { ...val, isSelected: !val.isSelected }
                : { ...val, isSelected: false }
            ),
          }
        : { ...items }
    )
    console.log(newWays)
    setData(newWays)
  }

  //   Toggle Next Page
  const HandleNext = () => {
    setCurrentPage((prev) => prev + 1)
  }
  //   Toggle Prev Page
  const HandlePrev = () => {
    setCurrentPage((prev) => prev - 1)
  }

  // Length of Questions
  const QuestionLength = `0${data.length}`

  // Select Question
  const SelectQuestion = (id) => {
    setCurrentPage(id)
  }

  // Timeout Spinner
  const handleSpinner = () => {
    setLoading(true)
  }

  //   Calculate Total
  const CalcTotal = () => {
    setLoading(true)
    let tot = 0
    data.forEach((val) => {
      val.options.forEach((opt) => {
        if (opt.isSelected && opt.isCorrect) {
          tot++
        }
      })
    })
    setTotal(tot)
    setCurrentPage("TotalPage&Preview")
    console.log(tot)
  }

  //   Handle Preview
  const HandlePreview = () => {
    setPreviewOption(true)
    setCurrentPage(1)
    setDisabledOpt(true)
  }

  //  Handle Try Again
  const HandleTryAgain = () => {
    setData(Questions)
    setCurrentPage(1)
    setShowResult(false)
    setPreviewOption(false)
    setDisabledOpt(false)
  }

  //   Effect for handling Loading state
  useEffect(() => {
    if (Loading) {
      setTimeout(() => {
        setLoading((val) => !val), setShowResult(true)
      }, 5000)
    }
  }, [Loading])

  //   Effect for handling answered question
  useEffect(() => {
    const checkAnswered = () => {
      let val = 0
      data.forEach((valz) => {
        valz.options.forEach((opt) => {
          if (opt.isSelected) {
            val++
          }
        })
      })
      setIsAnswered(val)
    }
    checkAnswered()
  }, [data])

  //   Effect for handling skipped question
  useEffect(() => {
    const checkSkipped = () => {
      const val = QuestionLength - isAnswered
      setIsSkipped(val)
    }
    checkSkipped()
  }, [data, QuestionLength, isAnswered])

  //   Value OBJECT
  const value = {
    data,
    setData,
    currentPage,
    handleSelected,
    HandleNext,
    HandlePrev,
    QuestionLength,
    isAnswered,
    isSkipped,
    SelectQuestion,
    total,
    CalcTotal,
    Loading,
    showResult,
    HandlePreview,
    disabledOpt,
    previewOption,
    HandleTryAgain,
  }

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  )
}

const useQuestionContext = () => {
  const contextData = useContext(QuestionContext)
  return contextData
}

export { QuestionProvider, useQuestionContext }
