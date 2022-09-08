import React, { useEffect, useState } from 'react'

export default function Sulibro() {

    let [q,setQ]=useState([
        { value: 'Who is ur fav actor'},
        { value: 'fav city'},
        { value: 'first phone'},
        { value: 'first bike'},
        { value: 'birth place'},
      
    ])
    let [q1,setQ1]=useState([
      { value: 'Who is ur fav actor'},
        { value: 'fav city'},
        { value: 'first phone'},
        { value: 'first bike'},
        { value: 'birth place'},
    ])
    let [q2,setQ2]=useState([
      { value: 'Who is ur fav actor'},
      { value: 'fav city'},
      { value: 'first phone'},
      { value: 'first bike'},
      { value: 'birth place'},
    ])
    let [b,setB]=useState()
    let [b1,setB1]=useState()
    let [b2,setB2]=useState()
    function h1(e){
      let dd=document.getElementById("slctq")
      setB(e.target.value)
      q1.splice(0,q1.length)
      dd.disabled=false
      setQ1([...q])
    
       }
   
       function h2(e){
        let dd1=document.getElementById("slctq1")
        setB1(e.target.value)
        q2.splice(0,q2.length)
        dd1.disabled=false
        setQ2([...q1])
     
        }
        function f(v1,i1,a1){
         if(v1.value===b){
          console.log("sucesss")
        
          a1.splice(i1,1)
          console.log(a1,"====>")
          setQ1([...a1])
       
         } 
         else{
          console.log("fail")
         }

        }
        function f1(v2,i2,a2){
          if(v2.value===b1){
           console.log("sucesss")
         
           a2.splice(i2,1)
           console.log(a2,"====>")
           setQ2([...a2])
        
          } 
          else{
           console.log("fail")
          }
 
         }
       useEffect(()=>{
   
        console.log(q1,"=====>>>>>>>")
      
          let aaa=q1.filter(f)
          console.log(aaa,"======>set11111")
      

       },[b])
       useEffect(()=>{   
   
        let aaa=q2.filter(f1)
        console.log(aaa,"======>set 22222")
     },[b1])
     
        function h3(e){
    
            setB2(e.target.value)
            }
       
         
  return (
    <div>
<h1>scrtquestion1</h1>
<select onChange={h1}>
<option >Select a question1</option>
{ q.map((qs,i)=>{
    return <option key={i} value={qs.value}>{qs.value}</option>
     })}
</select>

<h1>scrtquestion2</h1>
<select disabled id="slctq"  onChange={h2}>
<option>Select a question</option>
{q1.map((qs,i)=>{
   return <option  key={i}   value={qs.value}>{qs.value}</option>
     })}
</select>
<h1>scrtquestion3</h1>
<select id="slctq1" disabled  onChange={h3} >
<option>Select a question</option>
{q2.map((qs,i)=>{
     return <option key={i} value={qs.value}>{qs.value}</option>
     })}
</select>
<h1>{b}</h1>
<h1>{b1}</h1>
<h1>{b2}</h1>
    </div>
  )
}