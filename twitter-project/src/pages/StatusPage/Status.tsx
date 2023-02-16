import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Separator } from '../../components/Separator/Separator'
import { Tweet } from '../../components/Tweets/Tweet'
import './Status.css'

let newAnswer = ''

export function Status(){
  
const [newAnswer, setNewAnswer] = useState('')
const [answers, setAnswers] = useState([
  'Realmente... Concordo por completo.',
])

function createNewAnswer(e: FormEvent) {
  e.preventDefault()
  setAnswers([newAnswer, ...answers])
  setNewAnswer('')

}

  function handleHotkeySubmit(e: KeyboardEvent){
    if (e.key === 'Enter' && (e.shiftKey || e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
      <main className="status">
        <Header title='Tweet'/>

        <Tweet content='Ex: Meu primeiro Tweet.' />
        <Separator />

        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/DouglasNeres.png" alt="Imagem do Usuário" />
            <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(e) => {
            setNewAnswer(e.target.value)
            }}
            ></textarea>
          </label>

          <button 
          type="submit">
            <PaperPlaneRight />
            <span>Answer</span>
            </button>
        </form>

         {
          answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
  )
}