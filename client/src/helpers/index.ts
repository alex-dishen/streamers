export const handleError = (
  errorMessage: string,
  setError: (a: string) => void,
  setShowError: (a: boolean) => void,
) => {
  setError(errorMessage);
  setShowError(true);

  setTimeout(() => {
    setShowError(false);
  }, 4000);
};
