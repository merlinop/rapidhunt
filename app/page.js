import Headers from "@/components/Headers"
import NewTest from "@/components/NewTest"
import QuestionsSelector from "@/components/QuestionsSelector"
import Summary from "@/components/Summary"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#312e42] text-white flex items-center justify-center ">
      {/* Sub Center */}
      <div className=" w-[85%] lg:w-[65%] pb-4 h-[95vh] mx-auto rounded-2xl  bg-[#201f2e] text-sm overflow-y-scroll md:overflow-visible">
        {/* Header */}
        <Headers />

        {/* Summary */}
        <Summary />

        {/* QuestionsSelection & Test Section */}
        <div className="relative px-2 md:px-4 containerFlexCol gap-2 justify-center">
          <QuestionsSelector />

          {/* Test Section */}
          <div className="w-full flex items-center justify-end">
            <NewTest />
          </div>
        </div>
      </div>
    </div>
  )
}
