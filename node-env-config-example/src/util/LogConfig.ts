import {Category, CategoryLogger, CategoryServiceFactory, CategoryConfiguration, LogLevel} from "typescript-logging";

// Create categories, they will autoregister themselves, one category without parent (root) and a child category.
export const catConfig = new Category("config");
export const cat1 = new Category("cat1");
export const cat2 = new Category("cat2");

// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
export const setDefaultLogLevel = (logLevel: string) => {
    switch (logLevel) {
        case "error":
            CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Error));
            break;
        case "info":
            CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Info));
            break;
        case "debug":
            CategoryServiceFactory.setDefaultConfiguration(new CategoryConfiguration(LogLevel.Debug));
            break;
        default:
        catConfig.error ( () =>  `Got wrong loglevel: ${logLevel}, allowed are: debug, info, error`, null );
    }
};

// Optionally get a logger for a category, since 0.5.0 this is not necessary anymore, you can use the category itself to log.
// export const log: CategoryLogger = CategoryServiceFactory.getLogger(cat);
