module.exports = (on, config) => {
  on('task', {
    logStep(stepName) {
      console.log(`[Step] ${stepName}`);
      return null;
    }
  });
};
