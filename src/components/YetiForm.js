import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormContext } from '../context/FormContext';
import BeastModeQuestion from './BeastModeQuestion';
import YetiVibeQuestion from './YetiVibeQuestion';
import ASMRQuestion from './ASMRQuestion';
import RecipientNameQuestion from './RecipientNameQuestion';
import OccasionQuestion from './OccasionQuestion';
import CustomMessageQuestion from './CustomMessageQuestion';
import EmailQuestion from './EmailQuestion';
import { FORM_DIMENSIONS } from '../styles/formStyles';

const YetiForm = () => {
  const { currentQuestion } = useFormContext();

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 0:
        return <BeastModeQuestion />;
      case 1:
        return <YetiVibeQuestion />;
      case 2:
        return <ASMRQuestion />;
      case 3:
        return <RecipientNameQuestion />;
      case 4:
        return <OccasionQuestion />;
      case 5:
        return <CustomMessageQuestion />;
      case 6:
        return <EmailQuestion />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.formWrapper}>
      <View style={styles.formContainer}>
        {renderQuestion()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: FORM_DIMENSIONS.width,
    height: FORM_DIMENSIONS.height,
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
});

export default YetiForm; 