(function() {

    app.get("/get/table/data", function(req, resp) {

        var dummy = [];
        var i = 0;
        while (i != 100) {

            dummy.push({
                date: new Date(),
                name: 'Doe Pameron ' + i,
                email: 'doepameron@gmail.com',
                step1: 'step1' + i,
                step2: 'step2' + i,
                step3: 'step4' + i,
                step4: 'step1' + i,
                totalSteps: 4
            })
            i++;

        }
        resp.send(dummy);

    });

})();