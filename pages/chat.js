import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import StatusBar from '../components/StatusBar'
import ChatHeader from '../components/ChatHeader'
import ChatMessages from '../components/ChatMessages'
import TabBar from '../components/TabBar'
import Notification from '../components/Notification'

export default function Chat() {
  const [activeTab, setActiveTab] = useState(3) // Chat tab is active
  const [notification, setNotification] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Really love your most recent photo. I've been trying to capture the same thing for a few months and would love some tips!",
      sender: 'other',
      avatar: '/images/chat-avatar-1.png',
      timestamp: '10:30'
    },
    {
      id: 2,
      text: "A fast 50mm like f1.8 would help with the bokeh. I've been using primes as they tend to get a bit sharper images.",
      sender: 'me',
      timestamp: '10:32'
    },
    {
      id: 3,
      text: "Thank you! That was very helpful!",
      sender: 'other',
      avatar: '/images/chat-avatar-2.png',
      timestamp: '10:35'
    }
  ])

  const router = useRouter()
  const statusBarRef = useRef(null)
  const tabBarRef = useRef(null)
  const lastScrollTop = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        // Scrolling down
        if (statusBarRef.current) {
          statusBarRef.current.style.transform = 'translateX(-50%) translateY(-100%)'
        }
        if (tabBarRef.current) {
          tabBarRef.current.style.transform = 'translateX(-50%) translateY(100%)'
        }
      } else {
        // Scrolling up
        if (statusBarRef.current) {
          statusBarRef.current.style.transform = 'translateX(-50%) translateY(0)'
        }
        if (tabBarRef.current) {
          tabBarRef.current.style.transform = 'translateX(-50%) translateY(0)'
        }
      }

      lastScrollTop.current = scrollTop
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleTabClick = (index) => {
    setActiveTab(index)
    addHapticFeedback()

    switch (index) {
      case 0: // Home
        router.push('/')
        break
      case 1: // Search
        showNotification('Search functionality would open here')
        break
      case 2: // Upload
        showNotification('Camera/Upload functionality would open here')
        break
      case 3: // Chat
        // Already on chat page
        break
      case 4: // Profile
        showNotification('Profile settings would open here')
        break
    }
  }

  const handleBackClick = () => {
    router.push('/')
    addHapticFeedback()
  }

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 3000)
  }

  const addHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  return (
    <>
      <Head>
        <title>Chat with James</title>
        <meta name="description" content="Individual chat conversation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StatusBar ref={statusBarRef} />

        <div className="chat-container">
          <ChatHeader onBackClick={handleBackClick} />
          <ChatMessages messages={messages} />
        </div>

        <TabBar
          ref={tabBarRef}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        {notification && (
          <Notification message={notification} />
        )}
      </main>
    </>
  )
} 