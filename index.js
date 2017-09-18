const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month =>{
        console.log(_.pad(month.format("MMMM"), 26, ' '))
        console.log('S   M   T   W   Th  F   S   ')

        
        let monthRange = month.range('month')
        let firstDay = monthRange.start.day()
    
        console.log(firstDay)

        let days = Array.from(month.range('month').by('days'))
        let paddedDays = _.map(days, day =>{
            let date = day.date()
            if (day.month() == 8 && day.date() == 10){
                date = chalk.red(date)
            }
            if (day.month() == 10 && day.date() == 11){
                date = chalk.cyan(date)
            }
            _.unshift(firstDay.day())
            
            return _.padEnd(date, 2, ' ')
        })
        console.log(paddedDays)
})
