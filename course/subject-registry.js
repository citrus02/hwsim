const subjectRegistry = new Map();

export function registerSubjectData(subjectKey, subjectData) {
  if (!subjectKey || !subjectData) return false;
  subjectRegistry.set(subjectKey, subjectData);
  return true;
}

export function getRegisteredSubjectData(subjectKey) {
  return subjectRegistry.get(subjectKey) || null;
}

export function clearRegisteredSubjectData() {
  subjectRegistry.clear();
}

window.CourseSubjectRegistry = {
  registerSubjectData,
  getRegisteredSubjectData,
  clearRegisteredSubjectData,
};
