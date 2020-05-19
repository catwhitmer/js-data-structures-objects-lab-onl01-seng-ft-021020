let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newdriver = Object.assign({}, driver);
  delete newdriver[key];
  
  return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  
  return driver;
}