/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module '@nx-next-white-label/brand' {
  export * from '@nx-next-white-label/brand-wl';
}