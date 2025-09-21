import React, { useState, useEffect } from 'react';

function Dday() {
  const [days, setDays] = useState(0);
  const graduationDate = new Date('2025-11-04');

  useEffect(() => {
    const today = new Date();
    const timeDiff = graduationDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDays(daysDiff);
  }, []);

  const dDayString = days >= 0 ? `D-${days}` : `D+${Math.abs(days)}`;

  return (
    <div>
      <h2>졸업작품심사까지</h2>
      <p>{dDayString}</p>
    </div>
  );
}

export default Dday;
