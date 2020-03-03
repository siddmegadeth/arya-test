(function() {

    require("./module");
    require("./middleware");
    require("./dummy-route");

    http.listen(app.get("PORT"), function() {
        console.log("Arya Risk Server Started : " + app.get("PORT"));
    });
})()