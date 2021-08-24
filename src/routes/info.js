const express = require('express');
const { Router } = require('express');
const router = Router();
require('express-async-errors');
__dirname = '/home/adminpc/workspace-path/warehouse-API/src';

router.get('/', express.static(__dirname + '/public'));

module.exports = router;
