// throws an exception if the parameter is not defined

const defaultParameter = (param) => {
  return `Params is not defined: ${param}`;
};

console.log(defaultParameter());

// with defined parameter

const defaultParameter1 = (param = 2) => {
  return `Params is defined: ${param}`;
};

console.log(defaultParameter1());
