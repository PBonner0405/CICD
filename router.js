const express = require('express');
const axios = require('axios');
const router = express.Router();

const instance = axios.create({
    baseURL: process.env.ISSUER_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

router.get('/', async (req, res) => {
    res.json({ success: true, data: "Server running!" });
})
router.post('/get-token', async (req, res, next) => {

    let reqbody = {
        client_id: req.body?.client_id,
        client_secret: process.env.CLIENT_SECRET,
        audience: process.env.AUDIENCE,
        grant_type: process.env.GRANT_TYPE
    };

    try {
        let response = await instance.post('/oauth/token', reqbody);
        res.json({ success: true, data: response.data })
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;