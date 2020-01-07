const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.nytimes.com/section/technology')
  .then(({ data }) => {
    const $ = cheerio.load(data)
    // console.log($('.css-1l4spti').children('a').children('h2').html())
    $('.css-1l4spti').children('a').children('h2')
      .each((i, elem) => {
      console.log($(elem).text())
    })
    // console.log($('.css-1l4spti').html())
    // console.log($(data).text())
  })
  .catch(e => console.log(e))
