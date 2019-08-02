const parseConfig = field => {
  let value = window.process.env[field];
  if (value === '${' + field + '}') value = '';
  return value;
};

export const NODE_ENV = parseConfig('NODE_ENV');
export const VERSION = parseConfig('VERSION') || '0.0.0';
export const PUBLIC_URL = parseConfig('PUBLIC_URL') || '/';
