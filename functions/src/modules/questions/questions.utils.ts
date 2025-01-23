export const validateQuestionData = (data: any): boolean => {
  const { registryData, question, answer } = data;

  if (!registryData || !question || !answer) {
    return false;
  }

  const requiredRegistryFields = [
    'questionId',
    'type',
    'languages',
    'difficulty',
    'points',
    'subject',
    'gradeLevel',
    'topic',
    'createdBy',
  ];
  const hasAllFields = requiredRegistryFields.every((field) => registryData[field] !== undefined);

  if (!hasAllFields) {
    return false;
  }

  const languages = registryData.languages;
  if (!Array.isArray(languages) || languages.length === 0) {
    return false;
  }

  for (const lang of languages) {
    if (!question[lang] || !question[lang].text || !question[lang].language || question[lang].language !== lang) {
      return false;
    }
  }

  return true;
};
