import '@/style/css/common/ErrorPage.scss';
import Button from '@/components/common/Button.tsx';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <div className="error-page">
      <div className="error-msg-container">
        <h1>🥹</h1>
        <p>이런! 오류가 발생했습니다.</p>
        <Button label="메인 페이지로 이동" onClick={ handleClick } />
      </div>
    </div>
  );
};

export default ErrorPage;
