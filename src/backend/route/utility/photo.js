import express from 'express';
// import fs from 'fs';
import multer from 'multer';
// import uuidV4 from 'uuid/v4';
// import path from 'path';

import { uploadDir } from '../../utility.js';

const upload = multer({ dest: `${uploadDir}/` });

const router = express.Router();

router.post('/photo', upload.single('photo'), (request, response) => {
    return response.status(200);
});

module.exports = router;
