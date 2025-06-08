import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProjectDetail } from '../@types/paragraph.ts';
import LoadingPage from './LoadingPage.tsx';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ data, setData ] = useState<ProjectDetail | undefined>(undefined);

  useEffect(() => {
    if (!slug)  return;
    loadData().then();
  }, [slug]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const module = await import(`../assets/data/${slug}.json`);
      setData(module.default);
    } catch (e) {
      console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', e);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: Handle error. (#12)
  return isLoading
    ? <LoadingPage />
    : data
      ? (JSON.stringify(data))
      : (<div>에러입니다.</div>);
};

export default ProjectDetailPage;
