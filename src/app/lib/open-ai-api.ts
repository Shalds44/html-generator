import OpenAI from "openai";

const openai = new OpenAI();

export async function run() {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turb",
        messages: [{ role: "user", content: "Qui es-tu ?" }]
    });
    return completion.choices[0]
}

export async function test() {

    return "kolok"
}