import image1 from "../assets/image1.svg"
import glass from "../assets/glass.png"
import aluminium from "../assets/alum.png"
import paper from "../assets/news.png"

function HeroComponent() {
  return (
    <>
      <div className="flex items-center justify-between gap-12">
        <img src={image1} alt="" className="w-[45%]" />
        <div className="flex flex-col gap-8 p-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-7xl font-bold">Turning Waste into Wealth</h2>
            <h2 className="text-5xl font-bold text-gray-600">
              One Step at a Time
            </h2>
          </div>
          <p className="text-lg">
            Welcome to [Your Company Name], where we are dedicated to making a
            positive impact on the environment. Through responsible recycling,
            we aim to reduce waste, conserve resources, and create a sustainable
            future for generations to come.
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="text-center font-bold">
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
        </div>
      </div>
    </>
  )
}

export default HeroComponent
