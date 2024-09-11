const http = require("http");

http.get(process.argv[2], (respons) => {
    respons.setEncoding("utf8");
    respons.on("data", (data) => {
        console.log(data);
    });
});