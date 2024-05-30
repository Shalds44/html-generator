// import React, { useState, useEffect } from 'react'
import {run, test} from '@/app/lib/open-ai-api'

async function clickGenerateHtml(e:any){
    console.log(e)
}


export default async function htmlGenerator(){
    // const response = await run()
    // console.log(response)
    return (
        <main className="flex flex-col  mt-5">
        <h3 className="text-3xl font-bold">Html-generator</h3>
      </main>
    )
}