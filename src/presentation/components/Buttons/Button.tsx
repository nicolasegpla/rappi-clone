import React from 'react';

export const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};

export default Button;  // 🔥 Si querés importarlo con `import Button from './Button'`
