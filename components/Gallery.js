import Image from 'next/image'

export default function Gallery({ images, onImageClick }) {
  return (
    <div className="gallery-grid">
      {images.map((src, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => onImageClick(index)}
          style={{ animationDelay: `${(index + 1) * 0.1}s` }}
        >
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            width={167}
            height={index % 2 === 0 ? 220 : 310}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      ))}
    </div>
  )
} 