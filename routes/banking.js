var express = require("express");
var router = express.Router();
var http = require('http');
const querystring = require('querystring');

var postData = (post_data, end_point, callback) => {
    let post_options = {
            host: "localhost",
            port: "8080",
            path: end_point,
            method: "POST",
            timeout: 1000,
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

/* GET home page. */
router.get("/customer", function(req, res, next) {
    let fields = ["username", "name", "password", "street", "city"];
    res.render('create', {
        title: "Customer Create",
        fields: fields
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
        fields: fields
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
        fields: fields
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
        fields: fields
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
        fields: fields
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
        fields: fields
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
        fields: fields
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
        fields: fields
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
    let fields = ["paymentamount", "loannumber"];
    res.render('create', {
        title: "Payment Create",
        fields: fields
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
        fields: fields
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

module.exports = router;