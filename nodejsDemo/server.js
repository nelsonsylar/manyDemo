var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

  if (path === '/') {
    var string =fs.readFileSync('./index.html','utf8')  
    var amount =fs.readFileSync('./db','utf8')
    string=string.replace('&&&money&&&',amount)
    string=string.replace('&&&money2&&&',amount)
    string=string.replace('&&&money0&&&',amount)
    string=string.replace('&&&money3&&&',amount)
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path==='/style.css'){
    var string =fs.readFileSync('./style.css','utf8')  
    response.setHeader('Content-Type', 'text/css')
    response.write(string)
    response.end()
  }else if(path==='/main.js'){
    var string =fs.readFileSync('./main.js','utf8')  
    response.setHeader('Content-Type', 'application/javascript')
    response.write(string)
    response.end()
  }else if(path==='/pay6'){
    
    var amount =fs.readFileSync('./db','utf8')  

    amount=amount-6
    if(amount>0){
      fs.writeFileSync('./db',amount)
      response.setHeader('Content-Type', 'application/javascript')
      response.write('pay success')
    }else{response.write('pay failed')}
    response.end()
  }else if(path==='/pay68'){
    var amount =fs.readFileSync('./db','utf8')  
    amount=amount-68
    if(amount>0){
      fs.writeFileSync('./db',amount)
      response.setHeader('Content-Type', 'application/javascript')
      response.write('pay success')
    }else{response.write('pay failed')}
    response.end()
  }else if(path==='/charge'){
    var amount =fs.readFileSync('./db','utf8')  
    amount=amount-0+1000
    fs.writeFileSync('./db',amount)
    response.setHeader('Content-Type', 'image/jpg')
    response.write(fs.readFileSync('./px1.jpg'))
    response.end()
  }else if(path==='/pay688'){
    var amount =fs.readFileSync('./db','utf8')  
    amount=amount-688
    if(amount>0){
      fs.writeFileSync('./db',amount)
      response.setHeader('Content-Type', 'application/javascript')
      response.write(`
      ${query.callback}.call(undefined, 'success')
      `)
      fs.writeFileSync('./db',amount)
    }else{response.write('pay failed')}
    response.end()
  }else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('找不到index.html')
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


