function findMatching(drivers, name) {
    let matchingDrivers = [];
  
    for (let i = 0; i < drivers.length; i++) {
      if (drivers[i].toLowerCase() === name.toLowerCase()) {
        matchingDrivers.push(drivers[i]);
      }
    }
  
    return matchingDrivers;
  }
  
  function fuzzyMatch(drivers, letters) {
    let matchingDrivers = [];
  
    for (let i = 0; i < drivers.length; i++) {
      if (drivers[i].startsWith(letters)) {
        matchingDrivers.push(drivers[i]);
      }
    }
  
    return matchingDrivers;
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  