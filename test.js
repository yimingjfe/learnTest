require('should');
const getYears = require('./index');

let years = getYears(1990, 2017)

describe('测试时间生成函数', () => {
  it('生成正确的年份数量', () => {
    years
      .should.be.instanceof(Array)
      .and.have.lengthOf(2017 - 1990)
  })
  it('年月日有正确的属性', () => {
    let len = years.length
    for(let i = 0; i < len; i++) {
      let year = years[i]
      year.should.have.properties('label', 'value', 'children')
      let months = year.children
      let monthLen = months.length
      monthLen.should.exactly(12)
      for(let i = 0; i < monthLen; i++) {
        let month = months[i];
        month.should.have.properties('label', 'value', 'children')
        let days = month.children
        let daysLen = days.length
        if(month.value === 2){
          if(year.value % 4 === 0) {
            daysLen.should.exactly(29)
          } else {
            console.log(daysLen)
            daysLen.should.exactly(28)
          }
        }
        if(year.value === 2000 && month.value === 2) {
          console.log('ccc')
          daysLen.should.exactly(29)
        }
        for(let i = 0; i < daysLen; i++) {
          days[i].should.have.properties('label', 'value')
        }
      }
    }
  })
})
