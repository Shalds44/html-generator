'use client'
import React, { useState, useEffect } from 'react'
// import {run, test} from '@/app/lib/open-ai-api'



export default function htmlGenerator(){
    const [toggledisplay, setToggledisplay] = useState("initial")

    function clickGenerateHtml(){
        if(toggledisplay == "initial"){
            setToggledisplay("changer")
        }else{
            setToggledisplay("initial")
        }
    }

    // const response = await run()
    // console.log(response)
    return (
        <main className="flex flex-col  mt-5">
        <h3 className="text-3xl font-bold">Html-generator</h3>
        <button className='btn btn-primary btn-lg bg-gray-300 w-24 my-8' onClick={clickGenerateHtml} type='button'>Generate</button>
        <p>{toggledisplay}</p>
      </main>
    )
}