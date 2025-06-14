import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useFormContext } from '../context/FormContext';

const ASMRQuestion = () => {
  const { formData, updateFormData, previousQuestion, nextQuestion } = useFormContext();
  const selectedOption = formData.asmrMode;

  const handleSelect = (option) => {
    updateFormData('asmrMode', option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeti whispers in full{'\n'}ASMR mode?</Text>
      
      <View style={styles.options}>
        <Pressable 
          style={[
            styles.option,
            selectedOption === true && styles.selectedOption,
            { backgroundColor: selectedOption === true ? '#3182CE' : '#fff' }
          ]}
          onPress={() => handleSelect(true)}
        >
          <Text 
            style={[
              styles.optionText,
              selectedOption === true && styles.selectedText
            ]}
          >
            Yes!
          </Text>
        </Pressable>

        <Pressable 
          style={[
            styles.option,
            selectedOption === false && styles.selectedOption,
            { backgroundColor: selectedOption === false ? '#3182CE' : '#fff' }
          ]}
          onPress={() => handleSelect(false)}
        >
          <Text 
            style={[
              styles.optionText,
              selectedOption === false && styles.selectedText
            ]}
          >
            Not, maybe next time
          </Text>
        </Pressable>
      </View>

      <View style={styles.navigation}>
        <Pressable 
          style={styles.backButton}
          onPress={previousQuestion}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
        <Pressable 
          style={[styles.nextButton, selectedOption === null && styles.nextButtonDisabled]}
          disabled={selectedOption === null}
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

export default ASMRQuestion; 