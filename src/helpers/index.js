export const inputTimeFormatter = (inputDateValue = "") => {
  return new Date(`${inputDateValue}T00:00:00`).getTime();
};

export const calculateDays = ({ TInit, TEnd }) => {
  const diff = getDays({ TEnd, TInit });
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
export const calculateWeeks = ({ TInit, TEnd }) => {
  const days = calculateDays({ TInit, TEnd });
  return Math.floor(days / 7);
};
export const calculateMonth = ({ TInit, TEnd }) => {
  const weeks = calculateWeeks({ TInit, TEnd });
  return Math.floor(weeks / 4);
};

const getDays = ({ TInit, TEnd }) => {
  return TEnd - TInit;
};
