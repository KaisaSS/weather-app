const filterData = (data) => {
  const daysWithHours = [];
  let day = [];

  console.log("data", data);

  data.list.forEach((hour) => {
    let date = hour.dt_txt.split(" ")[0];

    if (day.length === 0) {
      day.push(hour);
    } else if (date === day[0].dt_txt.split(" ")[0]) {
      day.push(hour);
    } else {
      daysWithHours.push(day);
      day = [];
      day.push(hour);
    }
  });
  return daysWithHours;
};

export default filterData;
