(function() {

    // app.use(function(req, res, next) { //allow cross origin requests
    //     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    //     res.header("Access-Control-Allow-Origin", "http://localhost");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Authorization, Origin, Content-Type, Accept"
        );
        res.setHeader("Access-Control-Allow-Credentials", "true");
        next();
    });

    app.set('host', process.env.NODE_IP || 'localhost');
    app.set("PORT", process.env.PORT || 3000);
    app.use("/", express.static("public"));




})();