export default function ChatHeader({ onBackClick }) {
  return (
    <div className="chat-header">
      <div className="chat-header-background">
        <div className="chat-header-content">
          <button className="back-button" onClick={onBackClick}>
            <div className="back-chevron">‹</div>
          </button>
          <h1 className="chat-title">James</h1>
        </div>
      </div>
    </div>
  )
} 