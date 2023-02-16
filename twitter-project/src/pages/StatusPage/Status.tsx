import { Header } from '../../components/Header/Header'
import { Separator } from '../../components/Separator/Separator'
import { Tweet } from '../../components/Tweets/Tweet'
import './Status.css'

const answers = [
  'Concordo...',
  'Olha, Faz sentido.'	,
  'Parabéns pelo progresso.'

]

export function Status(){
  return (
      <main className="status">
        <Header title='Tweet'/>

        <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quo suscipit asperiores consequatur eius eveniet praesentium laborum recusandae obcaecati alias amet, tenetur, aliquam est magnam officia similique, quasi illum facilis.' />
        <Separator />

        <form className='answer-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/DouglasNeres.png" alt="Imagem do Usuário" />
            <textarea id="tweet" placeholder="Tweet your answer"></textarea>
          </label>

          <button 
          type="submit"
          onClick={() => {
            
          }}
          >Answer</button>
        </form>

         {
          answers.map(answer => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
  )
}