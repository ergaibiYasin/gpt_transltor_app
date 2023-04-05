import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import './App.css'


function App() {
  const [text, setText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function handleTranslation() {
    const prompt = `Translate this text from en to ${targetLanguage}: ${text}`; 
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "user", "content": prompt}
      ]
    });

    console.log(res.data.choices[0].message.content);

    setTranslatedText(res.data.choices[0].message.content);
  }

  return (
    <div>
      <label>
        Text to translate:
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Target language:
        <input type="text" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} />
      </label>
      <button onClick={handleTranslation}>Translate</button>
      {translatedText && <p>Translated text: {translatedText}</p>}
    </div>
  )
}

export default App
