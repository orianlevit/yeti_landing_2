import { StyleSheet } from 'react-native';

export const FORM_DIMENSIONS = {
  width: 800,
  height: 700, // Fixed height to accommodate largest question
  padding: 40,
};

export const sharedStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: FORM_DIMENSIONS.height,
    maxWidth: FORM_DIMENSIONS.width,
    padding: FORM_DIMENSIONS.padding,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
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
    paddingTop: 20,
    paddingBottom: 20,
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