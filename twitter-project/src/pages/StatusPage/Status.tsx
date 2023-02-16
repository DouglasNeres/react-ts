import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Separator } from '../../components/Separator/Separator'
import { Tweet } from '../../components/Tweets/Tweet'
import './Status.css'

let newAnswer = ''

export function Status(){
  
const [newAnswer, setNewAnswer] = useState('')
const [answers, setAnswers] = useState([
  'Concordo...',
  'Olha, Faz sentido.'	,
  'Parabéns pelo progresso.'
])

function createNewAnswer(e: FormEvent) {
  e.preventDefault()
  setAnswers([newAnswer, ...answers])
  setNewAnswer('')

}

  return (
      <main className="status">
        <Header title='Tweet'/>

        <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo suscipit asperiores consequatur eius eveniet praesentium laborum recusandae obcaecati alias amet, tenetur, aliquam est magnam officia similique, quasi illum facilis.' />
        <Separator />

        <form onSubmit={createNewAnswer} className='answer-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/DouglasNeres.png" alt="Imagem do Usuário" />
            <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(e) => {
            setNewAnswer(e.target.value)
            }}
            ></textarea>
          </label>

          <button 
          type="submit"
          >Answer</button>
        </form>

         {
          answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
  )
}