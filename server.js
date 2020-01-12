require('dotenv').config()
require('./config')
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

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

app.listen(process.env.PORT || 3000)
