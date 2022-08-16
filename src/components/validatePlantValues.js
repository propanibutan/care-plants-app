function isBlank(text) {
    return text.trim().length === 0;
}

function isNumber(text) {
    return /^\d+$/.test(text);
}

export default function validatePlantValues(values) {
    const errorMessages = {}

    if (isBlank(values.name)) {
        errorMessages.name = 'please input value';
      }
    
      if (isBlank(values.light)) {
        errorMessages.light = 'please input value';
      }
    
      if (isBlank(values.water)) {
        errorMessages.water = 'please input value';
      }
    
      if (!isNumber(values.temperature)) {
        errorMessages.temperature = 'please input number';
      }

      if (!isNumber(values.humidity)) {
        errorMessages.humidity = 'please input number';
      }

      if (isBlank(values.ground)) {
        errorMessages.ground = 'please input value';
      }

      if (isBlank(values.note)) {
        errorMessages.note = 'please input value';
      }
    
      return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null;
}