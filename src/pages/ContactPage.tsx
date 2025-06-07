import { defaultTheme, useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';

const ContactPage = () => {
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme(defaultTheme);
  });

  return (
    <div>
      <h1>Contact Page</h1>
      <p>is under construction.</p>
    </div>
  );
};

export default ContactPage;
