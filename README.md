# egg

查看前端静态资源的路劲为  域名+ /public/index.html

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


##### 请求转发的时候需要改写前缀为符合要求的格式
```
  config.httpProxy = {
    '/public/api': {
      target: 'http://81.70.36.99:8001',
      pathRewrite: { '^/public/api': '' },
    },
  }
```