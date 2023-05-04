

const InsertCash = ({ cash, handleChange, setCashValue, addToCash, resetCash }) => {


  return (
    <main className="w-3/4 md:w-1/2 mt-20 bg-gray-300 dark:bg-gray-800 h-32 mx-auto md:mt-28 rounded flex flex-col justify-around items-center shadow-lg">
        <form action="" onSubmit={setCashValue}>
            <label htmlFor="entered-money" className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mr-1">Enter Your Money:</label>
            <input required type="number" id="entered-money" value={cash} onChange={handleChange} className="border-t-4 border-emerald-600 shadow-xl w-20 h-8 bg-transparent border focus:outline-none focus:border-t-0 focus:border-r-4 rounded transition-all text-center dark:text-slate-200" />
        </form>

        
        <div id="btns">
            <button className="btn bg-indigo-700 hover:bg-indigo-500 mr-2" role='submit'>Set</button>
            <button onClick={addToCash} className="btn bg-emerald-600 hover:bg-emerald-500 mr-2">Add</button>
            <button onClick={resetCash} className="btn bg-red-600 hover:bg-red-500">Reset</button>
        </div>
    </main>
  )
}

export default InsertCash