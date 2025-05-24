import { forwardRef } from 'react'

const TabBar = forwardRef(({ activeTab, onTabClick }, ref) => {
  const tabs = [
    { id: 'home', icon: 'home' },
    { id: 'search', icon: 'search' },
    { id: 'upload', icon: 'upload' },
    { id: 'chat', icon: 'chat' },
    { id: 'profile', icon: 'profile' }
  ]

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'home':
        return (
          <div className="home-icon">
            <div className="home-shape"></div>
            <div className="home-roof"></div>
          </div>
        )
      case 'search':
        return (
          <div className="search-icon">
            <div className="search-circle"></div>
            <div className="search-line"></div>
          </div>
        )
      case 'upload':
        return (
          <div className="upload-icon">
            <div className="plus-vertical"></div>
            <div className="plus-horizontal"></div>
          </div>
        )
      case 'chat':
        return (
          <div className="chat-icon">
            <div className="chat-bubble"></div>
            <div className="chat-tail"></div>
          </div>
        )
      case 'profile':
        return (
          <div className="profile-icon">
            <div className="person-head"></div>
            <div className="person-body"></div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="tab-bar" ref={ref}>
      <div className="tab-indicator"></div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={`tab-item ${index === 2 ? 'upload-tab' : ''} ${activeTab === index ? 'active' : ''
            }`}
          onClick={() => onTabClick(index)}
        >
          {renderIcon(tab.icon)}
        </div>
      ))}
    </div>
  )
})

TabBar.displayName = 'TabBar'

export default TabBar 