import React from "react";

type ConfigNames = 'header' | 'footer';

export type ComponentConfig = Record<ConfigNames, React.CSSProperties>;
