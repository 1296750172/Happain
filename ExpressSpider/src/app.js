const express = require('express')
const requests = require('requests');
const parse = require('cheerio');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  requests(url="https://www.baidu.com").on('data', (text) => {
    const $ = parse.load(text)
    console.log($('body'))
    res.send("ok")
  })
})

app.listen(port, () => {
  console.log(`启动服务器。监听端口${port}`)
})