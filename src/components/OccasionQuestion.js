import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useFormContext } from '../context/FormContext';

const occasions = [
  'Birthday',
  'New Job',
  'New Born',
  'Marriage',
];

const OccasionQuestion = () => {
  const { formData, updateFormData, previousQuestion, nextQuestion } = useFormContext();
  const { occasion, customOccasion } = formData;

  const handleOccasionSelect = (selectedOccasion) => {
    updateFormData('occasion', selectedOccasion);
    if (selectedOccasion !== 'Other') {
      updateFormData('customOccasion', '');
    }
  };

  const handleCustomOccasion = (text) => {
    updateFormData('customOccasion', text);
  };

  const isValid = occasion !== null && 
    (occasion !== 'Other' || (occasion === 'Other' && customOccasion.trim() !== ''));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's the occasion?</Text>
      
      <View style={styles.options}>
        {occasions.map((opt) => (
          <Pressable 
            key={opt}
            style={[
              styles.option,
              occasion === opt && styles.selectedOption,
              { backgroundColor: occasion === opt ? '#3182CE' : '#fff' }
            ]}
            onPress={() => handleOccasionSelect(opt)}
          >
            <Text 
              style={[
                styles.optionText,
                occasion === opt && styles.selectedText
              ]}
            >
              {opt}
            </Text>
          </Pressable>
        ))}
        
        <Pressable 
          style={[
            styles.option,
            occasion === 'Other' && styles.selectedOption,
            { backgroundColor: occasion === 'Other' ? '#3182CE' : '#fff' }
          ]}
          onPress={() => handleOccasionSelect('Other')}
        >
          <Text 
            style={[
              styles.optionText,
              occasion === 'Other' && styles.selectedText
            ]}
          >
            Something else
          </Text>
        </Pressable>

        {occasion === 'Other' && (
          <TextInput
            style={styles.input}
            placeholder="Enter your occasion"
            value={customOccasion}
            onChangeText={handleCustomOccasion}
          />
        )}
      </View>

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
          <Text style={styles.nextButtonText}>Next →</Text>
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
  options: {
    width: '100%',
    gap: 16,
  },
  option: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    cursor: 'pointer',
  },
  selectedOption: {
    borderColor: '#3182CE',
  },
  optionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    fontFamily: 'Cal Sans',
  },
  selectedText: {
    color: 'white',
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

export default OccasionQuestion; 