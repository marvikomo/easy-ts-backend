import path from "path";
import { createLogger, transports, format } from "winston";
import "winston-daily-rotate-file";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const rootPath = process.env.PWD || path.dirname(require.main.filename);

const transport = new transports.DailyRotateFile({
  filename: "application-%DATE%.log",
  dirname: path.join(rootPath, `./logs/`),
  level: "info",
  handleExceptions: true,
  json: true,
  zippedArchive: true,
  maxSize: "20m",
  maxFiles: "14d",
});

transport.on("rotate", function () {
  // do something fun
});

/**
 * @description
 * ```
 * import { Logger } from "@nestcoinco/nubian-core";
 * ```
 * @const Logger
 * @property {LeveledLogMethod} info
 * @property {LeveledLogMethod} warn
 * @property {LeveledLogMethod} error
 * @property {LeveledLogMethod} debug
 */
const Logger = createLogger({
  transports: [transport],
});

if (process.env.NODE_ENV !== C.Environment.PRODUCTION) {
  Logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: "debug",
    })
  );
}

/**
 * @description
 * ```
 * import { LoggerStream } from "@nestcoinco/nubian-core";
 * ```
 * @const LoggerStream
 * @property {function(string)} write
 */
const LoggerStream = {
  write: (message: never) => {
    Logger.info(message);
  },
};

export { Logger, LoggerStream };