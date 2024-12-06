import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='container'>
      <div className='clock'>
        {time.toLocaleTimeString()} 
      </div>
    <div className='date'>
    {time.toLocaleDateString()}
    </div>
    
      
    </div>
  );
}

export default Clock;

