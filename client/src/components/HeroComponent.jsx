import image1 from "../assets/image1.svg"

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
        </div>
      </div>
    </>
  )
}

export default HeroComponent
