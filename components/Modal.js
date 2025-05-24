import { useEffect } from 'react'
import Image from 'next/image'

export default function Modal({ images, currentIndex, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleClose = () => {
    const modal = document.querySelector('.image-modal')
    if (modal) {
      modal.style.animation = 'fadeOut 0.3s ease'
      setTimeout(onClose, 300)
    } else {
      onClose()
    }
  }

  return (
    <div className="image-modal" onClick={handleOverlayClick}>
      <div className="modal-overlay">
        <div className="modal-content">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            width={800}
            height={600}
            style={{
              objectFit: 'contain',
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              borderRadius: '8px'
            }}
          />
          <button className="modal-close" onClick={handleClose}>
            &times;
          </button>
          <div className="modal-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  )
} 