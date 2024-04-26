"use client"
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState();
  const [gstRate, setGSTRate] = useState();
  const [gstType, setGstType] = useState();
  const[gstAmount, setGstAmount] =useState()
  const[totalAmount, setTotalAmount] = useState();
  function calculate(){
    let r = Number(gstRate);
    let a = Number(amount);
    let type = gstType;
    
    if(type==0){
      let result = (a*r)/100;
      setGstAmount(result.toFixed(2));
      setTotalAmount((a + result).toFixed(2))
    }
    else if(type==1){
      let result = a - [a * (100 / (100 + r))]
      setGstAmount(result.toFixed(2));
      setTotalAmount((a - result).toFixed(2))
    }

    
  }
  console.log(gstType)
  return (
    <div className="content-container py-5 lg:pt-16">
      <h1 className="text-3xl text-center">Gst Calculator</h1>
      <div className="w-2/4 mx-auto pt-8 pb-4">
        <input type="text" placeholder="Please enter your amount" className="w-full p-3 bg-slate-200 rounded-lg" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
      </div>
      <div className="w-2/4 mx-auto pt-3">
        <input type="text" placeholder="GST %" className="w-full p-3 bg-slate-200 rounded-lg" value={gstRate} onChange={(e)=>setGSTRate(e.target.value)}></input>
      </div>
      <div className="w-2/4 mx-auto pt-3">
          <div className="grid grid-cols-2">
            <div className="flex">
              <input type="radio" name="gstType" value="0" onChange={(e)=>setGstType(e.target.value)}/>
              <p>GST Exclusive</p>
            </div>
            <div className="flex">
              <input type="radio" name="gstType" value="1" onChange={(e)=>setGstType(e.target.value)}/>
              <p>GST Inclusive</p>
            </div>
          </div>
      </div>

      

      <div className="w-2/4 mx-auto mt-8">
        <p className="text-center"><button onClick={calculate} className="bg-orange-500 py-3 px-10 rounded-2xl text-white text-lg">Calculate</button></p>
      </div>
      <div className="w-2/4 mx-auto mt-8">
        <div className="bg-slate-300 py-5 px-3 rounded-lg">
          <div className="grid grid-cols-2">
          <p>Total GST :{gstAmount}</p>
          <p>Post/Pre GST Amount :{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
