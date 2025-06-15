import React from 'react';
import { View, StyleSheet } from 'react-native';

const YetiForm = () => {
  React.useEffect(() => {
    // Ensure the script is loaded
    const script = document.createElement('script');
    script.src = 'https://greeting-yet.involve.me/embed';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <View style={styles.formWrapper}>
      <View style={styles.formContainer}>
        <div 
          className="involveme_embed" 
          data-project="yeti" 
          data-title="yeti"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '16px',
            overflow: 'hidden'
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  formContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
});

export default YetiForm; 