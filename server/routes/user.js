const express = require('express')
const router = express.Router()

router.get("/",(request, response) => {
    response.send("First Test on Online Food Ordering System");
})



module.export = router