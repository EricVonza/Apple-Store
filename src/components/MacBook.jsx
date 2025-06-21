import React, { useState } from 'react'
import { macbookModels } from '../data/index'

const MacBook = () => {
  const [selectedChip, setSelectedChip] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)

  const currentMb = macbookModels[selectedChip]
  const currentColor = currentMb.colors[selectedColor]

  const handleSelectedChip = (index) => {
    setSelectedChip(index)
    setSelectedColor(0)
  }

  return (
    <div className="flex flex-col items-center justify-start bg-white p-4 h-screen overflow-hidden text-sm">
      <h1 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Choose your new MacBook Air.
      </h1>

      {/* Chip selection buttons */}
      <div className="flex justify-center gap-1 mb-4">
        {macbookModels.map((mb, index) => (
          <button
            key={index}
            className={`w-24 h-10 flex flex-col justify-evenly items-center border rounded-md
              ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}`}
            onClick={() => handleSelectedChip(index)}
          >
            <span className="text-xs font-bold text-gray-800">With {mb.chip}</span>
            <span className="text-xs text-gray-600">{mb.price}</span>
          </button>
        ))}
      </div>

      {/* Image + Info */}
      <div className="flex flex-col items-center">
        {/* Image */}
        <div className="w-48 h-32 mb-2">
          <img
            src={currentColor.img}
            alt={`MacBook Air with ${currentMb.chip}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Color label and selection */}
        <span className="text-sm font-medium text-gray-800 mb-1">{currentColor.label}</span>
        <div className="flex space-x-1 mb-2">
          {currentMb.colors.map((col, index) => (
            <button
              key={index}
              style={{ backgroundColor: col.bg }}
              className={`w-4 h-4 rounded-full border ${
                selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'
              }`}
              onClick={() => setSelectedColor(index)}
            ></button>
          ))}
        </div>

        {/* Chip icon */}
        <img src={currentMb.icon} alt="Chip Icon" className="w-8 h-8 mb-2" />

        {/* Specs */}
        <div className="text-center mb-2">
          {currentMb.specs.map((spec, index) => (
            <p key={index} className="text-xs font-semibold text-gray-800">
              {spec}
            </p>
          ))}
        </div>

        {/* Buy button */}
        <button className="text-xs py-1 px-2 bg-blue-400 rounded-full text-white">
          Buy
        </button>
      </div>
    </div>
  )
}

export default MacBook
