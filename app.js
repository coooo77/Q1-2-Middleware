const express = require('express')
const app = express()
const port = 3000

// 想法1
app.use((req, res, next) => {
  const start = Date.now()
  req.requestTime = new Date()
  const year = req.requestTime.getFullYear()
  const month = req.requestTime.getMonth()
  const day = req.requestTime.getDate()
  const hour = req.requestTime.getUTCHours()
  const minute = req.requestTime.getMinutes()
  const second = req.requestTime.getSeconds()
  const method = req.method
  const url = req.url
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}| ${method} from ${url} | total time:${duration}ms`)
  })
  next()
})

// 想法2
// app.use((req, res, next) => {
//   console.time(`total time`)
//   req.requestTime = new Date()
//   const year = req.requestTime.getFullYear()
//   const month = req.requestTime.getMonth()
//   const day = req.requestTime.getDate()
//   const hour = req.requestTime.getUTCHours()
//   const minute = req.requestTime.getMinutes()
//   const second = req.requestTime.getSeconds()
//   const method = req.method
//   const url = req.url
//   res.on('finish', () => {
//     console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}| ${method} from ${url}`)
//     console.timeEnd(`total time`)
//   })
//   next()
// })

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})