import { componentConfig as wlConfig, configCreator } from "@nx-next-white-label/brand-wl";

export const componentConfig = configCreator({
    header: {
        ...wlConfig.header,
        background: 'lightgray',
        color: 'black',
    },
    footer: {
        ...wlConfig.footer,
        background: 'lightgray',
        color: 'black',
    }
})