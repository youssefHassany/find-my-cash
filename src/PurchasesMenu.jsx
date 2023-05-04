import React from 'react'
import InsertPurchase from './InsertPurchase'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";



const PurchasesMenu = ({ nameInp, priceInp, handleNameInp, handlePriceInp, handleData, purchases, clearData, removePurchase, cash, remaining, calculateRemaining }) => {
  calculateRemaining(); // calling it to view data already
  return (
    <section id="purchases-menu" className="w-3/4 md:w-1/2 mx-auto mt-8 bg-gray-300 dark:bg-gray-800 rounded p-5 flex justify-center flex-col">
        <h1 className="text-3xl text-slate-700 dark:text-slate-300 font-medium mb-8">Your Purchases:-</h1>
        <ul id="purchases" className="w-full mx-auto p-3 overflow-x-scroll overflow-y-hidden h-44 flex flex-nowrap">

             {/* purchase item  */}
             {purchases.length > 0 ? purchases.map((pur) => (
                <li className="relative bg-slate-400 dark:bg-gray-600 rounded-xl w-32 h-32 flex-custom md:flex-customMd inline-block justify-around text-slate-900 dark:text-slate-300 p-1 mb-4 mr-2 shadow-lg" key={pur.id}>
                    <p className='text-xl my-4'>{pur.purchase}</p>
                    <p className='text-4xl font-bold'>{pur.price}</p>
                    <button onClick={() => removePurchase(pur.id)}>
                      <FontAwesomeIcon icon={faCircleXmark} className='absolute top-2 right-2 cursor-pointer hover:text-red-500 transition-all' />
                    </button>
                </li> 
            )) : <p className='text-3xl font-bold text-center dark:text-slate-300'>No Purchases Made</p>}

            
        </ul>


        <InsertPurchase 
          nameInp={nameInp}
          priceInp={priceInp}
          handleNameInp={handleNameInp}
          handlePriceInp={handlePriceInp}
          handleData={handleData}
          clearData={clearData}
        />

        {/* remainings  */}
        <h2 className="text-xl font-medium text-slate-700 dark:text-slate-400">Remaining: <span>{remaining}</span> / <span>{cash}</span></h2>
    </section>
  )
}

export default PurchasesMenu