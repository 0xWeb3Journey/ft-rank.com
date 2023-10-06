import { useState, useEffect } from 'react';
import './Logs.css'; 

function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState('buyprice');  // 默认按 buyprice 排序
  const [sortDirection, setSortDirection] = useState('asc');  // 默认升序

  useEffect(() => {
    fetch('http://localhost:8080/logs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.logs.sort((a, b) => parseFloat(a.buyprice) - parseFloat(b.buyprice));  // 假设 buyprice 是字符串，需要转换为数字
        setLogs(data.logs);
      })
      .catch(error => {
        console.error('There was an error fetching the logs', error);
      });
  }, []);

  const sortData = (data) => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = parseFloat(a[sortField]);
      const bValue = parseFloat(b[sortField]);
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    });
    setLogs(sortedData);
  };

  const handleSortChange = (field) => {
    if (field === sortField) {
      // 如果用户点击的是当前排序字段，则切换排序方向
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // 如果用户点击的是不同的排序字段，则切换排序字段并设置升序
      setSortField(field);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    // 当排序字段或排序方向改变时，重新排序数据
    sortData(logs);
  }, [sortField, sortDirection]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={() => setLoading(true)}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <table className="logs-table">
        <thead>
          <tr>
            <th onClick={() => handleSortChange('subject')}>Subject</th>
            <th onClick={() => handleSortChange('twittername')}>Twitter Name</th>
            <th onClick={() => handleSortChange('buyprice')}>Buy Price</th>
            <th onClick={() => handleSortChange('sellprice')}>Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.subject}</td>
              <td>{log.twittername}</td>
              <td>{log.buyprice}</td>
              <td>{log.sellprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;


//   return (
//     <div>
//       <table className="logs-table">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Twitter Name</th>
//             <th>Buy Price</th>
//             <th>Sell Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {logs.map(log => (
//             <tr key={log.id}>
//               <td>{log.subject}</td>
//               <td>{log.twittername}</td>
//               <td>{log.buyprice}</td>
//               <td>{log.sellprice}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Logs;
