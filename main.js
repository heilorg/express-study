let express = require("express");
let app = express();
let user = require("./routes/user");
let morgan = require("morgan");
let bodyParser = require("body-parser");

// const myLogger = (req, res, next) => {
//     console.log(req.url);
//     next();
// };
// app.use(myLogger); // http 통신과 라우팅 사이에 관여
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", express.static("public")); // "/"경로의 데이터 전송은 먼저오는게 우선권

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.use("/user", user);

app.listen(3000, () => {
    console.log("Example App is listening on port 3000");
});
