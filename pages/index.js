import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import StatusBar from '../components/StatusBar'
import ProfileHeader from '../components/ProfileHeader'
import ActionButtons from '../components/ActionButtons'
import Gallery from '../components/Gallery'
import TabBar from '../components/TabBar'
import Modal from '../components/Modal'
import Notification from '../components/Notification'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [isFollowing, setIsFollowing] = useState(false)
  const [notification, setNotification] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const statusBarRef = useRef(null)
  const tabBarRef = useRef(null)

  const galleryImages = [
    '/images/gallery-1.png',
    '/images/gallery-3.png',
    '/images/gallery-6.png',
    '/images/gallery-4.png',
    '/images/gallery-5.png',
    '/images/gallery-2.png'
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const lastScrollTop = useRef(0)

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
        window.scrollTo({ top: 0, behavior: 'smooth' })
        break
      case 1: // Search
        showNotification('Search functionality would open here')
        break
      case 2: // Upload
        showNotification('Camera/Upload functionality would open here')
        break
      case 3: // Chat
        showNotification('Messages would open here')
        break
      case 4: // Profile
        showNotification('Profile settings would open here')
        break
    }
  }

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing)
    showNotification(isFollowing ? 'Unfollowed Jane' : 'Now following Jane')
    addHapticFeedback()
  }

  const handleMessageClick = () => {
    showNotification('Message compose would open here')
    addHapticFeedback()
  }

  const handleSeeMoreClick = () => {
    setIsLoading(true)
    showNotification('Loading more images...')
    addHapticFeedback()

    setTimeout(() => {
      setIsLoading(false)
      showNotification('More images loaded')
    }, 2000)
  }

  const handleImageClick = (index) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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
        <title>Jane&apos;s Profile</title>
        <meta name="description" content="Jane's profile page - A modern mobile profile interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StatusBar ref={statusBarRef} />

        <div className="profile-container">
          <ProfileHeader />

          <ActionButtons
            isFollowing={isFollowing}
            onFollowClick={handleFollowClick}
            onMessageClick={handleMessageClick}
          />

          <Gallery
            images={galleryImages}
            onImageClick={handleImageClick}
          />

          <button
            className="btn btn-see-more"
            onClick={handleSeeMoreClick}
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'see more'}
          </button>
        </div>

        <TabBar
          ref={tabBarRef}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        {isModalOpen && (
          <Modal
            images={galleryImages}
            currentIndex={modalImageIndex}
            onClose={closeModal}
          />
        )}

        {notification && (
          <Notification message={notification} />
        )}
      </main>
    </>
  )
} 