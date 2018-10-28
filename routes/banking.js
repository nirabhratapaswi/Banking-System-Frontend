var express = require("express");
var router = express.Router();
var http = require('http');
const querystring = require('querystring');

// ---------------------------------------- Create/Update Routes ---------------------------------------------

var postData = (post_data, end_point, callback) => {
    let post_options = {
            host: "localhost",
            port: "8080",
            path: end_point,
            method: "POST",
            timeout: 4000,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Content-Length": Buffer.byteLength(post_data)
            }
        },
        post_req = http.request(post_options, function(res) {
            res.setEncoding('utf8');
            res.on("data", function(chunk) {
                console.log('Response: ' + chunk);
                callback({
                    success: true,
                    response: JSON.parse(chunk)
                });
            });
            res.on("error", err => {
                console.log(err);
                callback({
                    success: false,
                    response: null
                });
            });
        });

    post_req.write(post_data);
}

var BASE_URL = "http://localhost:3000/banking/",
    navigation_names = [{
        href: BASE_URL.concat("customer"),
        text: "Create Customer"
    }, {
        href: BASE_URL.concat("customer/update"),
        text: "Update Customer"
    }, {
        href: BASE_URL.concat("account"),
        text: "Create Account"
    }, {
        href: BASE_URL.concat("account/update"),
        text: "Update Account"
    }, {
        href: BASE_URL.concat("branch"),
        text: "Create Branch"
    }, {
        href: BASE_URL.concat("branch/update"),
        text: "Update Branch"
    }, {
        href: BASE_URL.concat("loan"),
        text: "Create Loan"
    }, {
        href: BASE_URL.concat("loan/update"),
        text: "Update Loan"
    }, {
        href: BASE_URL.concat("payment"),
        text: "Create Payment"
    }, {
        href: BASE_URL.concat("payment/update"),
        text: "Update Payment"
    }]

/* GET home page. */
router.get("/customer", function(req, res, next) {
    let fields = ["username", "name", "password", "street", "city"];
    res.render('create', {
        title: "Customer Create",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/customer", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/customer/update/new", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/customer/update", function(req, res, next) {
    let fields = ["customerid", "username", "name", "password", "street", "city"];
    res.render('create', {
        title: "Customer Update",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/customer/update", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/customer/update/existing", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/account", function(req, res, next) {
    let fields = ["balance", "branchname", "customerid", "isa"];
    res.render('create', {
        title: "Account Create",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/account", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/account/update/new", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/account/update", function(req, res, next) {
    let fields = ["accountnumber", "balance", "branchname", "customerid", "isa"];
    res.render('create', {
        title: "Account Update",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/account/update", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/account/update/existing", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/branch", function(req, res, next) {
    let fields = ["branchname", "branchcity", "assets"];
    res.render('create', {
        title: "Branch Create",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/branch", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/branch/update/new", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/branch/update", function(req, res, next) {
    let fields = ["branchname", "branchcity", "assets"];
    res.render('create', {
        title: "Branch Update",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/branch/update", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/branch/update/existing", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/loan", function(req, res, next) {
    let fields = ["amount", "customerid", "branchname"];
    res.render('create', {
        title: "Loan Create",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/loan", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/loan/update/new", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/loan/update", function(req, res, next) {
    let fields = ["loannumber", "amount", "customerid", "branchname"];
    res.render('create', {
        title: "Loan Update",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/loan/update", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/loan/update/existing", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/payment", function(req, res, next) {
    let fields = ["paymentamount", "loannumber", "accountid"];
    res.render('create', {
        title: "Payment Create",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/payment", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/payment/update/new", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

router.get("/payment/update", function(req, res, next) {
    let fields = ["paymentnumber", "paymentamount", "loannumber"];
    res.render('create', {
        title: "Payment Update",
        fields: fields,
        navigation_names: navigation_names
    });
});

router.post("/payment/update", function(request, response, next) {
    console.log(querystring.stringify(request.body));
    let post_data = querystring.stringify(request.body);
    postData(post_data, "/payment/update/existing", resp => {
        console.log(resp);
        response.end(JSON.stringify(resp));
    });
});

// ---------------------------------------- Create/Update Routes End ---------------------------------------------

// ---------------------------------------- Display Routes ---------------------------------------------

var getData = (end_point, callback) => {
    let get_options = {
        host: "localhost",
        port: "8080",
        path: end_point,
        method: "GET",
        timeout: 4000,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    };
    get_request = http.request(get_options, function(res) {
        let bodyChunks = [],
            sent = false;
        res.setEncoding('utf8');
        res.on("data", function(chunk) {
            console.log('Response: ' + chunk);
            bodyChunks.push(Buffer.from(JSON.stringify(chunk)));
            sent = true;
            callback({
                success: true,
                response: JSON.parse(chunk)
            });
        });
        res.on("error", err => {
            console.log(err);
            callback({
                success: false,
                response: null
            });
        });
        /*res.on("end", function() {
            console.log("bodyChunks: ", bodyChunks, "\ntype: ", typeof(bodyChunks));
            if (typeof(bodyChunks) == "string") {
                console.log("bodyChunks is of type string");
            } else {
                let body = Buffer.concat(bodyChunks);
                console.log("Response: ", body);
                callback({
                    success: true,
                    response: JSON.parse()
                });
            }
        });*/
        res.on("end", function() {
            if (!sent) {
                callback({
                    success: false,
                    response: "Not found"
                });
            }
        });
    });

    get_request.end();
}

router.get("/customer/list/all", function(request, response, next) {
    getData("/customer/list/all", resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/account/list/all", function(request, response, next) {
    getData("/account/list/all", resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/branch/list/all", function(request, response, next) {
    getData("/branch/list/all", resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/loan/list/all", function(request, response, next) {
    getData("/loan/list/all", resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/payment/list/all", function(request, response, next) {
    getData("/payment/list/all", resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/customer/getwithaccountsandloans/:username", function(request, response, next) {
    getData(encodeURI("/customer/getwithaccountsandloans/".concat(request.params.username)), resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/account/getwithbranchandcustomersandpayments/:accountnumber", function(request, response, next) {
    getData("/account/getwithbranchandcustomersandpayments/".concat(request.params.accountnumber), resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/branch/getwithaccountsandloans/:branchname", function(request, response, next) {
    getData(encodeURI("/branch/getwithaccountsandloans/".concat(request.params.branchname)), resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/loan/getwithcustomerandpayments/:loannumber", function(request, response, next) {
    getData(encodeURI("/loan/getwithcustomerandpayments/".concat(request.params.loannumber)), resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

router.get("/payment/getwithloan/:loannumber", function(request, response, next) {
    getData(encodeURI("/payment/getwithloan/".concat(request.params.loannumber)), resp => {
        console.log("Response in callback: ", JSON.stringify(resp, null, 4));
        response.write(JSON.stringify(resp.response, null, 10));
        response.end();
    });
});

// ---------------------------------------- Display Routes End ---------------------------------------------

module.exports = router;