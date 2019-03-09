import * as fs from "fs";
import * as log from "./util/LogConfig";

// Read loggingconfig from config file and register logging.
const appConfig = JSON.parse(fs.readFileSync("config/config.json").toString());

log.setDefaultLogLevel(appConfig.logging.level);


