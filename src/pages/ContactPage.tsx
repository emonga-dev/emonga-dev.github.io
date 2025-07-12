import { useEffect } from 'react';
import { useColorTheme, defaultTheme } from '@/contexts/ColorThemeContext.ts';

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
