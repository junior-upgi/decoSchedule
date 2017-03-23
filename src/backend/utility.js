import fs from 'fs';
import moment from 'moment-timezone';
import cron from 'node-cron';
import os from 'os';
import httpRequest from 'request-promise';
import winston from 'winston';

import { administrator, development, logDir, systemReference } from './serverConfig.js';
import { botApiUrl, getBotToken } from './model/telegram.js';
// logging utility
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir); }
export const logger = new(winston.Logger)({
    transports: [
        // colorize the output to the console
        new(winston.transports.Console)({
            timestamp: currentDatetimeString(),
            colorize: true,
            level: 'debug'
        }),
        new(winston.transports.File)({
            filename: `${logDir}/results.log`,
            timestamp: currentDatetimeString(),
            level: development ? 'debug' : 'info'
        })
    ]
});

// status report utility
export const statusReport = cron.schedule('0 0 8,22 * * *', () => {
    logger.info(`${systemReference} reporting mechanism triggered`);
    const issuedDatetime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const message = `${issuedDatetime} ${systemReference} server reporting in from ${os.hostname()}`;
    httpRequest({
        method: 'post',
        uri: botApiUrl + getBotToken('upgiITBot') + '/sendMessage',
        body: {
            chat_id: administrator,
            text: `${message}`,
            token: getBotToken('upgiITBot')
        },
        json: true
    }).then((response) => {
        logger.verbose(`${message}`);
        return logger.info(`${systemReference} reporting mechanism completed`);
    }).catch((error) => {
        alertSystemError('statusReport', error);
        return logger.error(`${systemReference} reporting mechanism failure ${error}`);
    });
}, false);

// telegram messaging utility
export function alertSystemError(functionRef, message) {
    httpRequest({ // broadcast alert heading
        method: 'post',
        uri: botApiUrl + getBotToken('upgiITBot') + '/sendMessage',
        body: {
            chat_id: administrator,
            text: `error encountered while executing [${systemReference}][${functionRef}] @ ${currentDatetimeString()}`,
            token: getBotToken('upgiITBot')
        },
        json: true
    }).then((response) => {
        return httpRequest({ // broadcast alert body message
            method: 'post',
            uri: botApiUrl + getBotToken('upgiITBot') + '/sendMessage',
            form: {
                chat_id: administrator,
                text: `error message: ${message}`,
                token: getBotToken('upgiITBot')
            }
        });
    }).then((response) => {
        return logger.info(`${systemReference} alert sent`);
    }).catch((error) => {
        return logger.error(`${systemReference} failure: ${error}`);
    });
}

export function endpointErrorHandler(method, originalUrl, errorMessage) {
    const errorString = `${method} ${originalUrl} route failure: ${errorMessage}`;
    logger.error(errorString);
    logger.info(alertSystemError(`${method} ${originalUrl} route`, errorString));
    return {
        errorMessage: errorString
    };
}

// date and time utility
export function currentDatetimeString() { return moment(new Date()).format('YYYY-MM-DD HH:mm:ss'); }

/*

function sendMobileMessage(recipientIDList, messageList, botName) {
    recipientIDList.forEach((recipientID) => {
        messageList.forEach((message) => {
            httpRequest({
                method: 'post',
                uri: serverConfig.botAPIUrl + telegram.getBotToken(botName) + '/sendMessage',
                form: {
                    chat_id: recipientID,
                    text: message,
                    token: telegram.getBotToken(botName)
                }
            }).then((response) => {
                logger.info('message sent');
            }).catch((error) => {
                logger.error(`messaging failure: ${error}`);
            });
        });
    });
    return;
}

function firstOfMonthString(year, month) {
    return moment(new Date(year, month - 1, 1), 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
}

function todayDateString() {
    return moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
}

module.exports = {
    alertSystemError: alertSystemError,
    endpointErrorHandler: endpointErrorHandler,
    logger: logger,
    sendMobileMessage: sendMobileMessage,
    statusReport: statusReport,
    // date and time utility
    currentDatetimeString: currentDatetimeString,
    firstOfMonthString: firstOfMonthString,
    todayDateString: todayDateString
};
*/
