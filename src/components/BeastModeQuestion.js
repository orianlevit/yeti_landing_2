import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useFormContext } from '../context/FormContext';
import { sharedStyles } from '../styles/formStyles';

const BeastModeQuestion = () => {
  const { formData, updateFormData, nextQuestion } = useFormContext();
  const selectedYeti = formData.beastMode;

  const handleSelect = (yeti) => {
    updateFormData('beastMode', yeti);
  };

  return (
    <View style={sharedStyles.container}>
      <View style={sharedStyles.contentContainer}>
        <Text style={sharedStyles.title}>Pick your beast mode</Text>
        
        <View style={styles.options}>
          <Pressable 
            style={[
              styles.option,
              selectedYeti === 'White Yeti' && styles.selectedOption,
              { backgroundColor: selectedYeti === 'White Yeti' ? '#3182CE' : '#fff' }
            ]}
            onPress={() => handleSelect('White Yeti')}
          >
            <Text 
              style={[
                styles.optionText,
                selectedYeti === 'White Yeti' && styles.selectedText
              ]}
            >
              White Yeti
            </Text>
          </Pressable>

          <Pressable 
            style={[
              styles.option,
              selectedYeti === 'Black Yeti' && styles.selectedOption,
              { backgroundColor: selectedYeti === 'Black Yeti' ? '#3182CE' : '#fff' }
            ]}
            onPress={() => handleSelect('Black Yeti')}
          >
            <Text 
              style={[
                styles.optionText,
                selectedYeti === 'Black Yeti' && styles.selectedText
              ]}
            >
              Black Yeti
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={sharedStyles.navigation}>
        <View style={{ width: 88 }} /> {/* Spacer to maintain layout */}
        <Pressable 
          style={[sharedStyles.nextButton, !selectedYeti && sharedStyles.nextButtonDisabled]}
          disabled={!selectedYeti}
          onPress={nextQuestion}
        >
          <Text style={sharedStyles.nextButtonText}>Next →</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BeastModeQuestion; 