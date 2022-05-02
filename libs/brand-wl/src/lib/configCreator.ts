import { componentConfig } from "./componentConfig";
import { ComponentConfig } from "./componentConfigType";

export function configCreator(partialConfig: Partial<ComponentConfig> = {}): ComponentConfig {
    return {
        ...componentConfig,
        ...partialConfig,
    };
}