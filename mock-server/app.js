const express = require('express');
const bodyParser = require('body-parser');
const uuidValidate = require('uuid-validate');
const _ = require('lodash');
const log = require('fancy-log');
const morgan = require('morgan');
const app = module.exports = express();
const PORT = 3333;

const isVerbose = (process.env.NODE_ENV != 'prod');

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

// parse application/x-www-form-urlencoded
app
    .use(bodyParser.urlencoded({
        extended: false
    }));

// parse application/json
app
    .use(bodyParser.json());

if (isVerbose) {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

app
    .map = (a, route) => {
    route = route || '';
    for (let key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case 'object':
                app.map(a[key], route + key);
                break;
            // get: function(){ ... }
            case 'function':
                if (isVerbose) {
                    log('%s => %s', key.toUpperCase().padStart(6), route);
                }
                app[key](route, a[key]);
                break;
        }
    }
};

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

const bankAccesses = require('./data/bank-accesses.json');

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

const API = {
    /**
     * @description Get all Bank Accesses.
     *
     * @param {Request} req - Request Object.
     * @param {Response} res - Response Object.
     *
     * @todo: change logic
     */
    getAll: (req, res) => {
        res.json(bankAccesses);
    },

    /**
     * @description Get Bank Access (rel:self)
     *
     * @param {Request} req - Request Object.
     * @param {Response} res - Response Object.
     */
    get: (req, res) => {
        const ba = _.find(bankAccesses, (item, key) => {
            return key === _.escape(req.params.bid);
        });

        res.json(ba);
    },

    /**
     * @description Delete Bank Access.
     *
     * @param {Request} req - Request Object.
     * @param {Response} res - Response Object.
     *
     * @todo: change logic
     */
    delete: (req, res) => {
        res.send(`delete ${ req.params.bid }`);
    },

    /**
     * @description Konten.
     *
     * @param {Request} req - Request Object.
     * @param {Response} res - Response Object.
     *
     * @todo: change logic
     */
    getAccountTurnovers: (req, res) => {
        res.send(`getAccountTurnovers ${ req.params.bid }`);
    },

    /**
     * @description Kapital.
     *
     * @param {Request} req - Request Object.
     * @param {Response} res - Response Object.
     *
     * @todo: change logic
     */
    getAssetTurnovers: (req, res) => {
        res.send(`getAssetTurnovers ${ req.params.bid }`);
    }
};

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

app
    .param('bid', (req, res, next, bid) => {
        let msg = null;

        if (uuidValidate(bid)) {
            const ba = _.find(bankAccesses, (bankAccess, bankAccessId) => {
                return bankAccessId === bid;
            });

            if (!_.isNil(ba)) {
                next();
                return;
            } else {
                msg = `Can not find bank access with id=[${ _.escape(bid) }]`;
            }
        } else {
            msg = `Invalid bank access ID: [${ _.escape(bid) }]`;
        }

        next(createError(404, msg || 'Failed to find bank access'));
    });

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

app
    .map({
        '/banksapi': {
            get: API.getAll,
            delete: API.delete,
            '/:bid': {
                get: API.get,
                '/turnovers-accounts': {
                    get: API.getAccountTurnovers
                },
                '/turnovers-assets': {
                    get: API.getAssetTurnovers
                }
            }
        }
    });

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

// the error handler is placed after routes
// if it were above it would not receive errors
// from app.get() etc
app
    .use(error);

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

if (!module.parent) {
    app
        .listen(PORT, () => {
            log(`Server listening on port ${ PORT }!`);
        });
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --

/**
 * @description Create HTTP error.
 *
 * @param status
 * @param message
 *
 * @returns {Error}
 */
function createError(status, message) {
    const err = new Error(message);
    err.status = status;
    return err;
}

/**
 * @description error handling middleware have an arity of 4 instead of the typical (req, res, next),
 * Otherwise they behave exactly like regular middleware, you may have several of them, in different orders etc.
 *
 * @param err
 * @param {Request} req - Request Object.
 * @param {Response} res - Response Object.
 * @param {Function} next
 *
 * @see https://github.com/expressjs/express/blob/4.13.1/examples/error/index.js
 */
function error(err, req, res, next) {
    // log it
    // if (isVerbose) {
    //     log.error(err.stack);
    // }

    // respond with 400 "BAD REQUEST".
    res.status(400).send();
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- --
