import React, { useState } from 'react';

const Step2Component = () => {
  const [month, setMonth] = useState(1);
  const year = 2024;

  const handleChange = (event: any) => {
    setMonth(parseInt(event.target.value));
  };

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();

  const renderCalendar = () => {
    const rows = [];
    let cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(<td key={day}>{day}</td>);
      if ((day + firstDay) % 7 === 0) {
        rows.push(<tr key={day}>{cells}</tr>);
        cells = [];
      }
    }

    if (cells.length) {
      rows.push(<tr key="last">{cells}</tr>);
    }

    return rows;
  };

  return (
    <div>
           <section
  id="tab-wizard-p-0"
  role="tabpanel"
  aria-labelledby="tab-wizard-h-0"
  className="body current"
  aria-hidden="false"
>
  <br />
  <div className=" col-12">
    <div className="row align-items-center">
      <div className="col-xl-4 hidden-lg-down">
        <div style={{ maxWidth: 800 }}>
        <dotlottie-player
  src="https://lottie.host/0f2c3fae-41b7-401a-92e3-c255a694be86/XaZbHQVHLA.json"
  background="transparent"
  speed={1}
  style={{ width: 400, height: 400 }}
  loop=""
  autoPlay=""
/>

        </div>
      </div>
      <div className="col-xl-8 col-lg-12">
      <h1>Chọn Tháng và Hiển Thị Ngày</h1>
      <label htmlFor="monthSelect">Chọn tháng:</label>
      <select id="monthSelect" value={month} onChange={handleChange}>
        <option value="1">Tháng 1</option>
        <option value="2">Tháng 2</option>
        <option value="3">Tháng 3</option>
        <option value="4">Tháng 4</option>
        <option value="5">Tháng 5</option>
        <option value="6">Tháng 6</option>
        <option value="7">Tháng 7</option>
        <option value="8">Tháng 8</option>
        <option value="9">Tháng 9</option>
        <option value="10">Tháng 10</option>
        <option value="11">Tháng 11</option>
        <option value="12">Tháng 12</option>
      </select>

      <h2>Ngày trong tháng</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Chủ Nhật</th>
            <th>Thứ Hai</th>
            <th>Thứ Ba</th>
            <th>Thứ Tư</th>
            <th>Thứ Năm</th>
            <th>Thứ Sáu</th>
            <th>Thứ Bảy</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendar()}
        </tbody>
      </table>
      </div>
    </div>
  </div>
  <br />
</section>
 
    </div>
  );
};

export default Step2Component;
