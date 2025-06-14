import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import YetiForm from './components/YetiForm';
import { FormProvider } from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.logo, styles.calSans]}>AI YETI</Text>
          <View style={styles.nav}>
            <Pressable style={styles.navItem}><Text style={[styles.navText, styles.calSans]}>How It Works</Text></Pressable>
            <Pressable style={styles.navItem}><Text style={[styles.navText, styles.calSans]}>Pricing</Text></Pressable>
            <Pressable style={[styles.navItem, styles.ctaButton]}><Text style={[styles.ctaText, styles.calSans]}>Get Started</Text></Pressable>
          </View>
        </View>

        <View style={styles.mainContent}>
          <Text style={[styles.heroTitle, styles.calSans]}>Get greeted by the Yeti!</Text>
          
          <View style={styles.formSection}>
            <img 
              src="/images/yeti_3.png" 
              alt="Friendly AI Yeti"
              style={styles.yetiImage}
            />
            <View style={styles.formWrapper}>
              <YetiForm />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, styles.calSans]}>© 2024 Pixel Party. All rights reserved.</Text>
          <Text style={[styles.footerText, styles.calSans]}>Made with ❤️ by the Yeti!</Text>
        </View>
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
    backgroundColor: '#FAFAFA',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 80,
  },
  logo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  navItem: {
    padding: 8,
  },
  navText: {
    color: '#4A5568',
    fontSize: 14,
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: '#3182CE',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ctaText: {
    color: 'white',
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '600',
    color: '#2D3748',
    lineHeight: 60,
    textAlign: 'center',
    marginBottom: 20,
  },
  formSection: {
    position: 'relative',
    width: '100%',
    maxWidth: 1000,
    alignItems: 'center',
  },
  formWrapper: {
    width: '100%',
    position: 'relative',
    zIndex: 2,
  },
  yetiImage: {
    position: 'absolute',
    bottom: -100,
    right: -100,
    width: 400,
    height: 'auto',
    objectFit: 'contain',
    zIndex: 1,
  },
  footer: {
    width: '100%',
    padding: 12,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderTop: '1px solid #E2E8F0',
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