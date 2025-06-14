import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useFormContext } from '../context/FormContext';

const EmailQuestion = () => {
  const { formData, updateFormData, previousQuestion, nextQuestion } = useFormContext();
  const { email } = formData;

  const handleEmailChange = (text) => {
    updateFormData('email', text);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValid = email.trim() !== '' && isValidEmail(email);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We'll send the greeting{'\n'}to your email</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.navigation}>
        <Pressable 
          style={styles.backButton}
          onPress={previousQuestion}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
        <Pressable 
          style={[styles.nextButton, !isValid && styles.nextButtonDisabled]}
          disabled={!isValid}
          onPress={nextQuestion}
        >
          <Text style={styles.nextButtonText}>Submit →</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 800,
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Cal Sans',
  },
  input: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    fontSize: 18,
    color: '#2D3748',
    backgroundColor: 'white',
    fontFamily: 'Cal Sans',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  backButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#EDF2F7',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5568',
    fontFamily: 'Cal Sans',
  },
  nextButton: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#3182CE',
  },
  nextButtonDisabled: {
    backgroundColor: '#A0AEC0',
    cursor: 'not-allowed',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Cal Sans',
  },
});

export default EmailQuestion; 