import glass from "../assets/glass.png"
import aluminium from "../assets/alum.png"
import paper from "../assets/news.png"

function RecycleItems() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-center font-bold text-2xl">
          We will help you recycle the following items
        </h1>
        <div className="flex gap-8 justify-center">
          <div className="text-center w-[8rem] flex flex-col justify-start items-center bg-purple-100 rounded-md p-2">
            <img src={glass} alt="" className="w-[6.5rem]" />
            <p>Glass Bottles</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[8rem] text-center bg-purple-100 rounded-md p-2">
            <img src={aluminium} alt="" className="w-[6.5rem]" />
            <p>Metal Cans</p>
          </div>
          <div className="text-center w-[8rem] flex flex-col justify-start items-center bg-purple-100 rounded-md p-2">
            <img src={paper} alt="" className="w-[6.5rem]" />
            <p>Paper</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecycleItems
