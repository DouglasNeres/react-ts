import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { Tweet } from './components/Tweets/Tweet'
import { Sidebar } from './components/SideBar/Sidebar'
import { Header } from './components/Header/Header'
import { Separator } from './components/Separator/Separator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
      <main className="timeline">
        <Header title='Home'/>

        <form className='new-tweet-form'>
          <label htmlFor="tweet">
            <img src="https://github.com/DouglasNeres.png" alt="Imagem do Usuário" />
            <textarea id="tweet" placeholder="What's Happening?"></textarea>
          </label>

          <button type="submit">Tweet</button>
        </form>

        <Separator />

        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        
      </main>
      </div>
    </div>
  </React.StrictMode>,
)
