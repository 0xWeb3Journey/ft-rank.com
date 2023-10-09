import React, { useState } from 'react';
import { sortData } from '../utils/sortData';
import Modal from './Modal';
import Logs from './Logs';  // Adjust the path according to your folder structure


function DataView({ data }) {
  const [timeframe, setTimeframe] = useState('3days');
  const [showModal, setShowModal] = useState(false);

  const sortedData = sortData(data, timeframe);

  return (
    <div>
      <button onClick={() => setTimeframe('3days')}>3 Days</button>
      <button onClick={() => setTimeframe('7days')}>7 Days</button>
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      <ul>
        {sortedData.map(item => (
          <li key={item.id}>
            {item.name} - {timeframe === '3days' ? item.threeDayValue : item.sevenDayValue}
          </li>
        ))}
      </ul>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <div>
            <Logs />
        </div>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default DataView;