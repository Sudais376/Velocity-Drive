import React from 'react'

const Mm2Details = ({onClose}) => {

    const handleClose = (event) => {
        event.preventDefault(); // Prevent default button behavior
        onClose(); 
      };

  return (
    <>
    <div className="plan rounded-lg shadow-lg p-4 bg-white text-white max-w-sm">
      <div className="inner flex flex-col items-center p-5 pt-10 bg-[#1b1f3b] rounded-lg relative">
        <span className="pricing absolute top-0 right-0 bg-[#E63946] rounded-l-full flex items-center py-2 px-3 text-lg font-semibold text-white">
          $490012 
        </span>
        <p className="title font-bold text-lg text-white py-4">Rolls-Royce Ghost</p>
        <p>The Rolls-Royce Ghost offers a seamless blend of power and grace, embodying the spirit of modern luxury. Its minimalist yet bold design speaks to those who value refinement without compromise.</p>
        
        
        <div className="action mt-5 w-full flex items-center justify-end">
          <a href="#" onClick={handleClose} className="button bg-[#E63946] rounded-md text-white font-medium text-lg text-center w-full py-2 hover:bg-[#E42725]">
            Close Details
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Mm2Details
