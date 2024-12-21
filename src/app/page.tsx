"use client"
import React, { useState, useEffect } from "react";
// import { useClient } from "sanity";
 
const app= () => {
  const [count,setCount] = useState(0) //0 JO RKHA HUA WOHI VALUE AIGI       //count value ko hold krka rkhega jo bhe value aigi ya ha state variable setCount state updation function h y kam krega k jab + p click krega tw ya value chNGE KREGA

//first --- specifice function side effect ya action
//second --- clean up
//third --- list of dependencies

// useEffect(() => {    
// first
// return() => {
//   second 
// }
// }, [third])

//variant - 1
// useEffect(() => {
//   alert('i will run on each runder')    //jb bhe page lod hog y CHLEG ya aik specific kam hogya  like jb bhe counter ko plus kra page render huA tw isna phla ya msg dya 
// }) but y KOI achi pracice h h first time p hojai bar bar na hooo

//variant - 2
// useEffect(() => {
//   alert('i will run on each runder')     
// }, [])      //,[] lgna sa ab ya bar bar nh aiga dependency lga di       //2 bar nh lna tw next config m jk react strict mode ko false krdega 

//variant -- 3
useEffect(() => {
  alert('i will run on each runder')     
}, [count]) 
  
return(
  <div className="flex justify-center items-center h-screen flex-col">
    <h1>counter</h1>

    <div className="w-96 py-8 bg-slate-300 text-black flex justify-center items-center gap-6">

    <button onClick={() => setCount(count + 1)}>+</button> 
    {/* //button k andr on click kra iska andr   arrow function dLa aur setcount k function ko cLL KRA ab ya count ko + krega*/}
    {count}

    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
  </div>
)
}

export default app;



















