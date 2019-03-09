import * as fs from "fs";
import * as log from "./util/LogConfig";
import {SimpleType} from "./types/SimpleType";

// Read loggingconfig from config file and register logging.
const appConfig = JSON.parse(fs.readFileSync("config/config.json").toString());
const logLevel = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : appConfig.logging.level;

log.setDefaultLogLevel(logLevel);
log.cat1.info (() => "node-env-config-example is started");

const printCompareResult = (v1: SimpleType, v2: SimpleType) => {
    log.cat1.info (() => `[printCompareResult] v1=${simpleType1.toString()}` );
    log.cat1.info (() => `[printCompareResult] v2=${simpleType1.toString()}` );
    if (v1.equals(v2)) {
        log.cat1.info (() => `[printCompareResult] v1===v2` );
    } else {
        log.cat1.info (() => `[printCompareResult] v1!==v2` );
    }
};

const simpleType1: SimpleType = new SimpleType();
const simpleType2: SimpleType = new SimpleType();

printCompareResult(simpleType1, simpleType2);

simpleType2.numValue = 3;
simpleType2.dateValue = new Date();
log.cat2.info(() => `Date value: ${simpleType2.dateValue}` );
printCompareResult(simpleType1, simpleType2);
