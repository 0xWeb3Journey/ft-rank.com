import { useEffect, useState } from 'react';
import axios from 'axios';
import DataView from '../components/DataView';

function HomePage() {
  const [data, setData] = useState([]);
  console.log("===============");
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://178.128.92.73:8080/logs');
        
        // console.log("===============");
        console.log(result.data);
        setData(result.data.logs);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DataView data={data} />
    </div>
  );
}

export default HomePage;