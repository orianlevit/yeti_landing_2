import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const videoRefs = {
    left: useRef(null),
    center: useRef(null),
    right: useRef(null)
  };
  
  const [playingStates, setPlayingStates] = useState({
    left: false,
    center: true,
    right: false
  });

  const handleVideoClick = (position) => {
    const videoRef = videoRefs[position];
    if (videoRef.current) {
      if (playingStates[position]) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlayingStates(prev => ({
        ...prev,
        [position]: !prev[position]
      }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.logo, styles.calSans]}>AI YETI</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={[styles.heroTitle, styles.calSans]}>Make your custom greeting from the TESTING!</Text>
        
        <View style={styles.videoSection}>
          <View style={[styles.videoContainer, styles.clickableVideo]} onClick={() => handleVideoClick('left')}>
            <video 
              ref={videoRefs.left}
              src={`${process.env.PUBLIC_URL}/videos/1.mp4`}
              style={styles.video}
              playsInline
              loop
              controls={false}
            />
            <View style={styles.videoOverlay}>
              <Text style={[styles.videoOverlayText, styles.calSans]}>
                {playingStates.left ? 'Click to Pause' : 'Click to Play'}
              </Text>
            </View>
          </View>
          <View style={[styles.videoContainer, styles.clickableVideo]} onClick={() => handleVideoClick('center')}>
            <video 
              ref={videoRefs.center}
              src={`${process.env.PUBLIC_URL}/videos/2.mp4`}
              style={styles.video}
              playsInline
              autoPlay
              loop
              controls={false}
            />
            <View style={styles.videoOverlay}>
              <Text style={[styles.videoOverlayText, styles.calSans]}>
                {playingStates.center ? 'Click to Pause' : 'Click to Play'}
              </Text>
            </View>
          </View>
          <View style={[styles.videoContainer, styles.clickableVideo]} onClick={() => handleVideoClick('right')}>
            <video 
              ref={videoRefs.right}
              src={`${process.env.PUBLIC_URL}/videos/3.mp4`}
              style={styles.video}
              playsInline
              loop
              controls={false}
            />
            <View style={styles.videoOverlay}>
              <Text style={[styles.videoOverlayText, styles.calSans]}>
                {playingStates.right ? 'Click to Pause' : 'Click to Play'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.funnelContainer}>
          <iframe 
            src="https://WMCaVqjrQY.myfunnelish.com/new-checkout"
            style={styles.funnelIframe}
            title="Yeti Funnel"
            scrolling="no"
            allowTransparency="true"
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, styles.calSans]}>© 2024 Pixel Party. All rights reserved.</Text>
        <Text style={[styles.footerText, styles.calSans]}>Made with ❤️ by the Yeti!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundColor: '#FAFAFA',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: '50px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 24,
    gap: 24,
  },
  logo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2D3748',
    lineHeight: 40,
    textAlign: 'center',
    marginTop: 32,
  },
  videoSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    padding: '0 16px',
    marginTop: 32,
    marginBottom: 32,
  },
  videoContainer: {
    width: 360,
    height: 240,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#000',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    position: 'relative',
  },
  clickableVideo: {
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'scale(1.02)',
    },
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.2s ease',
    ':hover': {
      opacity: 1,
    },
  },
  videoOverlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  funnelContainer: {
    width: '100%',
    maxWidth: 1000,
    height: 1101,
    marginTop: 16,
  },
  funnelIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'transparent',
  },
  footer: {
    width: '100%',
    padding: 8,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderTop: '1px solid #E2E8F0',
    height: '50px',
  },
  footerText: {
    fontSize: 12,
    color: '#4A5568',
    textAlign: 'center',
  },
  calSans: {
    fontFamily: 'Cal Sans',
  },
});

export default App; 