import React from 'react';

const VERSION = process.env.VERSION || '0.0.0';

const Health = () => <h1>{VERSION}</h1>;

export default Health;
