import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProjectDetail } from '../@types/paragraph.ts';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [ data, setData ] = useState<ProjectDetail | undefined>(undefined);

  useEffect(() => {
    if (!slug)  return;

    const loadData = async () => {
      try {
        const module = await import(`../assets/data/${slug}.json`);
        setData(module.default);
      } catch (e) {
        console.error('프로젝트 데이터를 불러오는 데 실패했습니다:', e);
      }
    };

    loadData().then();
  }, [slug]);

  // TODO: Handle error. (#12)
  return data
    ? (JSON.stringify(data))
    : (<div>에러입니다.</div>);
};

export default ProjectDetailPage;
