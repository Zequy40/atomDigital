import { useState, useEffect } from 'react';

const AtomLogoAnimation = () => {
  const [currentText, setCurrentText] = useState('i');
  const [isVisible, setIsVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const textSequence = [
    { text: 'i', color: '#8900B0', isText: true },
    { text: 'utomate', color: '#E9E9E9', isText: true },
    { text: 'ccuracy', color: '#8900B0', isText: true },
    { text: 'TOM', color: '#a855f7', isText: false, isImage: true }
  ];

  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setSequenceIndex((prev) => {
          const next = (prev + 1) % textSequence.length;
          setCurrentText(textSequence[next].text);
          return next;
        });
        setIsVisible(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentItem = textSequence[sequenceIndex];

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px'
  };

  const logoAStyle = {
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imgAStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 20px rgba(137, 0, 176, 0.5)) drop-shadow(0 0 40px rgba(137, 0, 176, 0.3))'
  };

  const textContainerStyle = {
    minWidth: '200px',
    height: '120px',
    display: 'flex',
    alignItems: 'center'
  };

  const imageWrapperStyle = {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.5s',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)'
  };

  const imgTomStyle = {
    height: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 20px rgba(137, 0, 176, 0.5)) drop-shadow(0 0 40px rgba(137, 0, 176, 0.3))'
  };

  const textStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: currentItem.color,
    textShadow: `0 0 20px ${currentItem.color}80, 0 0 40px ${currentItem.color}40`,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    letterSpacing: '0.05em',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.5s',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.95)'
  };

  return (
    <div style={containerStyle}>
      <div style={logoAStyle}>
        <img
          src="/a.png"
          alt="A"
          style={imgAStyle}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div style={textContainerStyle}>
        {currentItem.isImage ? (
          <div style={imageWrapperStyle}>
            <img
              src="/tom.png"
              alt="TOM"
              style={imgTomStyle}
            />
          </div>
        ) : (
          <div style={textStyle}>
            {currentText}
          </div>
        )}
      </div>
    </div>
  );
};

export default AtomLogoAnimation;     // Renderizar el componente

