import React from 'react'

const Hero = () => {
    let imageURL = "https://wallpapers.com/images/hd/purple-gaming-nepi2tnxp6g0mvz9.jpg"
  return (
    <div
      className="bg-cover bg-center h-[calc(100vh-4rem)] mt-16"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      {/* Optional content inside the div */}
      <div className="h-full flex items-center justify-center">
      <div className="backdrop-blur-md rounded-full px-10 py-6">
          <h1 className="text-white text-4xl font-bold text-center">Welcome to <br />Techo</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
