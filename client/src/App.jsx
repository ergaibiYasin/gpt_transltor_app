import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { languageOptions } from './constants/languagesList';
import { Container, InputContainer, Select, TextArea, Boxe, Button } from "./AppStyles";
import './App.css';


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
        { "role": "user", "content": prompt }
      ]
    });

    setTranslatedText(res.data.choices[0].message.content);
  }

  return (
    <Container>
      <h1>Translation App</h1>

      <InputContainer>

        <TextArea type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text to translate" />
        <Select id="language-select" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
          <option value="">-- Please choose a language --</option>
          {Object.entries(languageOptions).map(([code, language]) => (
            <option key={code} value={language}>
              {language}
            </option>
          ))}
        </Select>
        <Button onClick={handleTranslation}>Translate</Button>
        {translatedText && <Boxe>{translatedText}</Boxe>}
      </InputContainer>
    </Container>
  )
}

export default App
