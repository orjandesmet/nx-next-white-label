import { componentConfig as wlConfig, configCreator } from "@nx-next-white-label/brand-wl";

export const componentConfig = configCreator({
    header: {
        ...wlConfig.header,
        color: 'yellow',
        background: 'black',
        textDecoration: 'underline',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        padding: '8px',
        background: 'black',
        color: 'yellow',
    }
})