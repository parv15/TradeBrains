'use client'
import '../global.css'
import {data} from '../data'


export default function task(){

console.log('data', data);
    return(
        <>
        {data.sectorName.map((item,i) =>{
           return( <h1 key={i} style={{"color":"white"}}>{item.sect_name}</h1>)
        })}
        </>

    
    )
}