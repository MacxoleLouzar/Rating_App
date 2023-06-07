import express from 'express';

import {
    getAllDataSheet,
    getSingleDataSheet,
    AddDataToSheet,
    updateDataGoogleSheet,
    deleteDataGoogleSheet,
} from '../controller/DataController.js';

const router = express.Router();

router.route('https://sheetdb.io/api/v1/xcuq48o2wlen4').get(getAllDataSheet).post(AddDataToSheet);
router
.route("/id/:id")
.get(getSingleDataSheet)
.put(updateDataGoogleSheet)
.delete(deleteDataGoogleSheet);

export default router