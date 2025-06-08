// TODO: add color theme props.
import '../style/css/common/LoadingPage.scss';
import '../style/css/common/layout.scss';

const LoadingPage = () => {
  return (
    <div className='loading-page'>
      <div className='image loading'/>
      <div className='paragraph-container'>
        <div className='paragraph'>
          <div className='title loading' style={ { width: '50%' } }/>
          <div className='text loading' style={ { width: '20%' } }/>
          <div className='text loading' style={ { width: '33%' } }/>
          <div className='text loading' style={ { width: '10%' } }/>
          <div className='text loading' style={ { width: '77%' } }/>
        </div>
        <div className='image round loading'/>
      </div>
    </div>
  );
};

export default LoadingPage;
