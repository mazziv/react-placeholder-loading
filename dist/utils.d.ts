import { AvailableShapes } from 'types';
export declare const getShapeProps: (shapeInfo: Pick<import("./types").IPlaceholderLoadingProps, "width" | "height">) => (type: AvailableShapes) => {
    width: string | number;
    height: string | number;
} | {
    cx: number;
    cy: number;
    r: number;
};
export declare const getSvgProps: (shapeInfo: Pick<import("./types").IPlaceholderLoadingProps, "width" | "height">) => (type: AvailableShapes) => {
    width: string | number;
    height: string | number;
} | {
    width: string | number;
    height: string | number;
};
