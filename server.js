"use strict";var _app = require('./dist/app');

_app.app.listen(process.env.PORT || 5000, () => {
    console.log('Server Running')
})