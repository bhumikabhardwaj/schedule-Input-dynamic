import React, { useState } from 'react';


const ScheduleInput = () => {
  const [schedules, setSchedules] = useState([
    {
      day: '', startTime: '', endTime: ''
    }
  ]);

  const handleChange = (index, field, value) => {
    const newtSchedules = [...schedules];
    newtSchedules[index][field] = value;
    setSchedules(newtSchedules);
  }

  const handleRemove = (index) => {
    const newtSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(newtSchedules);
  }

  const handleAdd = () => {
    setSchedules([...schedules, { day: '', startTime: '', endTime: '' }]);
  }

  const handleClearAll = () => {
    setSchedules([{ day: '', startTime: '', endTime: '', }]);

  }


  return (
    <div>
      <button onClick={handleAdd}>
        Add new
      </button>
      <button onClick={handleClearAll}>
        clear All
      </button>
      {schedules.map((schedule, index) => (

        <div key={index}>
          <select value={schedule.day} onChange={(e) => handleChange(index, 'day', e.target.value)}>
            <option value="">day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <input type='time' value={schedule.startTime} onChange={(e) => handleChange(index, 'startTime', e.target.value)}>

          </input>
          <input type='time' value={schedule.endTime} onChange={(e) => handleChange(index, 'endTime', e.target.value)}>

          </input>
          <button onClick={() => handleRemove(index)}>X</button>
        </div>
      ))}
    </div>
  );
};


export default ScheduleInput;
