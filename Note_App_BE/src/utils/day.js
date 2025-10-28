const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

const vietnameseDate = (rawDate) => {
    return dayjs(rawDate).tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD \n HH:mm:ss");
}

module.exports = {vietnameseDate};