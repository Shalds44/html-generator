// import React, { useState, useEffect } from 'react'
import {run, test} from '@/app/lib/open-ai-api'

async function clickGenerateHtml(e:any){
    console.log(e)
}


export default async function htmlGenerator(){
    const response = await run()
    console.log(response)
    return (
    <div>
        <div>
            <p>sss</p>
        </div>
    </div>
    )
}