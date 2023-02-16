import twitterLogo from '../../assets/logo-twitter.svg'

import { Bell, BookmarkSimple, Envelope, FileText, Hash, House, User, DotsThreeCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className='logo' src={twitterLogo} alt="Logo" />

      <nav className='main-navigation'>
        <NavLink to="/">
          <House weight='fill' />
          Home
        </NavLink>
        <a href="">
          <Hash />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>

      <button className='new-tweet' type='button'>
        Tweet
      </button>
    </aside>
  )
}