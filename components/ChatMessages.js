import Image from 'next/image'

export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender === 'me' ? 'message-sent' : 'message-received'}`}
        >
          {message.sender === 'other' && message.avatar && (
            <div className="message-avatar">
              <Image
                src={message.avatar}
                alt="Avatar"
                width={28}
                height={28}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%'
                }}
              />
            </div>
          )}
          <div className="message-bubble">
            <p className="message-text">{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 