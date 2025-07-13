import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProjectDetailContent } from '@/@types/project-detail.ts';
import LoadingPage from './LoadingPage.tsx';
import ProjectDetailRenderer from '@/components/detail/ProjectDetailRenderer.tsx';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ data, setData ] = useState<ProjectDetailContent | undefined>(undefined);

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

  return isLoading
    ? <LoadingPage />
    : data
      ? <ProjectDetailRenderer content={ data } />
      : (<div>에러입니다.</div>);  // TODO: Handle error. (#12)
};

export default ProjectDetailPage;
