import { useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';

const AboutPage = () => {
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme({
      background: '#ff0000',
      base: '#000000',
      accent1: '#ffffff',
      accent2: '#ffffff',
    });
  }, []);

  return (
    <div style={ { backgroundColor: '#ff0000' } }>
      <h1>애몽가?</h1>
      <p>무심한 듯 흘러가던 일상에, 조용히 스며드는 디자인.
        익숙한 것들 사이에서 낯선 온기를 찾는 당신에게,
        애몽가는 오늘도 작은 이야기를 건넵니다.</p>
    </div>
  );
};

export default AboutPage;
