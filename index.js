//可以添加测试  各种年月天份测试  显示各个年
const getDays = (year, month) => {
  let daysLen = 0;
  let days = [];
  switch(month) {
    case 1,3,5,7,8,10,12:
      daysLen = 31
      break
    case 2:
      if(year % 4 === 0) {
        daysLen = 29
      }  else {
        daysLen = 28
      }
      break
    default:
      daysLen = 30
  }

  for(let i = 1; i < daysLen + 1; i++) {
    let dayObj = {
      value: i,
      label: `${i}日`
    }
    days.push(dayObj)
  }
  return days
}

const getMonths = (year) => {
  let months = []
  for(let i = 1; i < 13; i++) {
    let monthObj = {
      value: i,
      label: `${i}月`,
      children: getDays(year, i)
    }
    months.push(monthObj)
  }
  return months
}

const getYear = (year) => {
  return {
    value: year,
    label: `${year}年`,
    children: getMonths(year)
  }
}

const getYears = (startY, endY) => {
  let years = []
  for(let i = startY; i < endY; i++) {
    years.push(getYear(i))
  }
  return years
}


module.exports = getYears
