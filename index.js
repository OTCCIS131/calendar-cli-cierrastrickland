const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month =>{
        console.log(_.pad(month.format("MMMM"), 26, ' '))
        console.log('S   M   T   W   Th  F   S ')

        
        let monthRange = month.range('month')
        let firstDay = monthRange.start.day()
    
        // console.log(firstDay)

        let days = Array.from(monthRange.by('days'))

        _.chain(days)
            .map(day => {
                let date = day.format('DD')
                if(day.month() == 8 && day.date()== 10){
                    date = chalk.magenta(date)
                }
                if(day.month() == 11 && day.date() == 11){
                    date = chalk.magenta(date)
                }
                return date
            })

            .tap(days => {
                for(let i = 0; i < firstDay; i++)
                    days.unshift('  ')
            })
            .chunk(7)

            .each(week => {
                console.log(_.join(week, '  '))
            })
            .value()
            console.log('')
            })