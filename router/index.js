export default (app) => {
  app.get("/",(req,res) => {
    res.send("首页")
    res.end();
  })
}