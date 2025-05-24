export default function ActionButtons({ isFollowing, onFollowClick, onMessageClick }) {
  const handleButtonClick = (callback) => {
    // Add visual feedback
    const button = event.target
    button.style.transform = 'scale(0.95)'
    button.style.transition = 'transform 0.1s ease'

    setTimeout(() => {
      button.style.transform = ''
    }, 100)

    // Call the actual handler
    callback()
  }

  return (
    <div className="action-buttons">
      <button
        className={`btn btn-primary ${isFollowing ? 'btn-following' : ''}`}
        onClick={() => handleButtonClick(onFollowClick)}
      >
        {isFollowing ? 'following' : 'follow jane'}
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => handleButtonClick(onMessageClick)}
      >
        message
      </button>
    </div>
  )
} 