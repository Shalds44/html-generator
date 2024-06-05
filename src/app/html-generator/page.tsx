'use client';
import React, { useState, useEffect } from 'react'
import {askGpt} from '@/app/lib/open-ai-api'

export default function HtmlGenerator(){
    const [responseGpt, setResponseGpt] = useState("initial");
    const [responseHtml, setResponseHtml] = useState("initialHtml")

    async function clickGenerateHtmlGpt(){
        const response = await askGpt();
        setResponseGpt(response.message.content)
    }

    async function clickGenerateHtml(){
        const exempleHtml = `
        <div class="flex flex-col mt-5">
          <p>First paragraph</p>
          <p>Second paragraph</p>
          <p>Third paragraph</p>
        </div>`;
        setResponseHtml(exempleHtml)
    }

    return (
        <main className="flex flex-col mt-5">
        <h3 className="text-3xl font-bold">Html-generator</h3>
        <button className='btn btn-primary btn-lg bg-gray-300 w-24 my-8' onClick={clickGenerateHtmlGpt} type='button'>
            GenerateGpt
        </button>
        {responseGpt && <div dangerouslySetInnerHTML={{ __html: responseGpt }} />}
        <button className='btn btn-primary btn-lg bg-gray-300 w-24 my-8' onClick={clickGenerateHtml} type='button'>
            GenerateHtml
        </button>
        {responseHtml && <div dangerouslySetInnerHTML={{ __html: responseHtml }} />}
      </main>
    )
}