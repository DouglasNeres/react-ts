import { FormEvent, useState } from "react"
import { Header } from "../components/Header/Header"
import { Separator } from "../components/Separator/Separator"
import { Tweet } from "../components/Tweets/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {

  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu Certo'
  ])

  function createNewTweet(e: FormEvent) {
    e.preventDefault()
    setTweets([newTweet, ...tweets])

  }

  return (
    <main className="timeline">
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/DouglasNeres.png" alt="Imagem do Usuário" />
          <textarea
            id="tweet"
            placeholder="What's Happening?"
            onChange={(e) => {
              newTweet = e.target.value

            }}
          ></textarea>
        </label>

        <button
          type="submit">
          Tweet
        </button>
      </form>

      <Separator />

      {
        tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet} />
        })}

    </main>
  )
}