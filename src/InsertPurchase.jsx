import React from 'react'

const InsertPurchase = ({ nameInp, priceInp, handleNameInp, handlePriceInp, handleData, clearData }) => {
  
  return (
    <section>
      <form className='mx-auto py-5 border-y-2 border-slate-600 w-5/6 mb-1 flex flex-col' onSubmit={handleData}>
        <input
            type='text'
            required
            placeholder='Purchase Name'
            className='mx-auto bg-transparent rounded border-2 border-slate-600 text-center block mb-4 focus:outline-none text-slate-400'
            value={nameInp}
            onChange={handleNameInp}
        />

        <input
            type='number'
            required
            placeholder='Purchase Price'
            className='mx-auto bg-transparent rounded border-2 border-slate-600 text-center block focus:outline-none text-slate-400'
            value={priceInp}
            onChange={handlePriceInp}
        />

        {/* add purchase button */}
        <button id="add" className="btn bg-emerald-600 hover:bg-emerald-500 hover:text-slate-900 mx-auto mt-5" role='submit'>Add</button>

    </form>
      <div className='mx-auto w-fit mb-10'>

          {/* add purchase button */}
          <button id="edit" className="btn bg-indigo-700 hover:bg-indigo-500 hover:text-slate-900 mx-auto mt-5 mr-1">Edit</button>

          {/* clear purchases button */}
          <button id="clear" className="btn bg-red-700 hover:bg-red-500 hover:text-slate-900 mx-auto mt-5" onClick={clearData}>Clear</button>
      </div>
    </section>
  )
}

export default InsertPurchase