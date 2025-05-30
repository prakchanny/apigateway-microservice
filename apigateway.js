const express = require('express');
const app = express();

//USE PROXY SERVER 
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

//REDIRECT TO STUDENT MICROSERVICE
app.use('/student', (req, res) => {
    console.log('Inside API GATEWAY STUDENT ROUTE');
    proxy.web(req, res, { target: 'http://3.95.221.5:4000' });
});

//REDIRECT TO TEACHER MICROSERVICE
app.use('/teacher', (req, res) => {
    console.log('Inside API GATEWAY TEACHER ROUTE');
    proxy.web(req, res, { target: 'http://44.210.128.217:3000' });
});

app.listen(5000, () => {
    console.log('API Gateway is running on port 5000', 5000);
    });
