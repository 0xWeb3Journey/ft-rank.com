export function sortData(data, timeframe = "3days") {

    console.log(data);
    return data.sort((a, b) => {
      if (timeframe === "3days") {
        return b.threeDayValue - a.threeDayValue;
      } else {
        return b.sevenDayValue - a.sevenDayValue;
      }
    });
  }