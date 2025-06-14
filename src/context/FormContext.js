import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    beastMode: null,  // for "Pick your beast mode"
    yetiVibe: null,   // for "What's the Yeti's vibe today?"
    asmrMode: null,   // for "Yeti whispers in full ASMR mode?"
    recipientName: '', // for recipient's full name
    occasion: null,    // for the occasion
    customOccasion: '', // for custom occasion input
    message: '',       // for custom message
    email: '',        // for recipient's email
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
  };

  const previousQuestion = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  return (
    <FormContext.Provider value={{ 
      formData, 
      updateFormData,
      currentQuestion,
      nextQuestion,
      previousQuestion
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}; 