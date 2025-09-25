// Utility functions for the application

/**
 * Formats address information into a readable string
 * @param {string} country 
 * @param {string} city 
 * @param {string} address 
 * @returns {string}
 */
export const formatAddress = (country, city, address) => {
  return `Country: ${country}, City: ${city}, Address: ${address}`;
};

/**
 * Toggles between two string values
 * @param {string} currentValue 
 * @param {string} value1 
 * @param {string} value2 
 * @returns {string}
 */
export const toggleBetweenValues = (currentValue, value1, value2) => {
  return currentValue === value1 ? value2 : value1;
};

/**
 * Validates if a number is within a specific range
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {boolean}
 */
export const isInRange = (value, min = 0, max = 100) => {
  return value >= min && value <= max;
};
