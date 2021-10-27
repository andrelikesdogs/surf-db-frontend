export const formatRun = (runId, style, mode) => {
  const idAsInt = parseInt(runId, 10);
  if (idAsInt === 1) {
    return "Main";
  }

  return `Bonus #${idAsInt - 1}`;
};
