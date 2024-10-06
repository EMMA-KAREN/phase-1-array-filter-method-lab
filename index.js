// Test cases
const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Tampa Bay" }
  ];
  
  // Function implementations
  function findMatching(driverNames, searchString) {
    return driverNames.filter(driverName => driverName.toLowerCase().includes(searchString.toLowerCase()));
  }
  
  function fuzzyMatch(driverNames, searchString) {
    return driverNames.filter(driverName => driverName.toLowerCase().startsWith(searchString.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Export the functions for testing
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  };