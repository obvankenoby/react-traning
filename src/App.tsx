import type { AxiosRequestConfig } from 'axios';
import { useAxios } from './hooks/useAxios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const config: AxiosRequestConfig = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts',
};

function App() {
  const { data, error, loading } = useAxios<Post[]>(config);

  if (error && typeof error === 'string') {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  return <div>{data?.map((item) => item.title)}</div>;
}

export default App;
