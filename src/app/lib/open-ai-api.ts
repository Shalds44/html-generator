import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY
    , dangerouslyAllowBrowser: true
  });

export async function askGpt() {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { 
                role: "user", 
                content: "envoie moi du html un formulaire de connexion avec login de password dedans et met en forme avec des balises styles envoie moi que le html dans ta réponse." }]
    });
    return completion.choices[0]
}