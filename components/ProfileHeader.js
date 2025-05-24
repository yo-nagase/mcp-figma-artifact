import Image from 'next/image'

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="profile-image">
        <Image
          src="/images/profile-image.png"
          alt="Jane's Profile"
          width={128}
          height={128}
          priority
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <h1 className="profile-name">Jane</h1>
      <p className="profile-location">San francisco, ca</p>
    </div>
  )
} 