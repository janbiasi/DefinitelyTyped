// Type definitions for system-service 1.3
// Project: https://github.com/leocwlam/system-service
// Definitions by: Leo Lam <https://github.com/leocwlam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import { FileConfiguration, Logger, LoggerConfiguration, SourcesConfiguration } from "system-logger";

export {
    FileConfiguration,
    fileRotateType as FileRotateType,
    level as Level,
    Logger,
    LoggerConfiguration,
    SourcesConfiguration,
} from "system-logger";

export interface ServiceConfiguration {
    log: {
        config: LoggerConfiguration;
        file?: {
            source?: FileConfiguration | undefined;
        } | undefined;
        source?: {
            source?: SourcesConfiguration | undefined;
        } | undefined;
    };
}

export class MessageConsumer {
    logger: Logger;

    constructor();
    service(): void;
    setup(systemService: SystemService): void;
    cleanup(): void;
    create(): void;
    validate(message: any): void;
    process(message: any): void;
    start(): void;
    stop(): void;
}

export class SystemService {
    config: ServiceConfiguration;
    messageConsumer: MessageConsumer;
    logger: Logger;

    constructor(config?: ServiceConfiguration, messageConsumer?: MessageConsumer);
    validateMessage(message: any): void;
    processMessage(message: any): void;
    start(): void;
    stop(): void;
}
