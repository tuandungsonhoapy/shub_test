import { Link, useLocation } from 'react-router-dom'
import './header.scss'
import { useState } from 'react'

const headerMenu = [
  {
    name: 'Task 1',
    path: '/'
  },
  {
    name: 'Task 2',
    path: '/task2'
  },
  {
    name: 'Task 3',
    path: '/task3'
  }
]

export const Header = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<string>(location.pathname)

  const renderHeaderMenu = () => {
    return headerMenu.map(item => {
      return (
        <Link onClick={() => setActiveTab(item.path)} to={item.path} className={`tab ${activeTab === item.path ? 'active' : ''}`} key={item.path}>
          {item.name}
        </Link>
      )
    })
  }

  return (
    <header className="header">
      <nav className="nav-tabs">
        {renderHeaderMenu()}
      </nav>
    </header>
  )
}

export default Header
