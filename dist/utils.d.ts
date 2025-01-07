import { ShapeInfo, AvailableShapes } from 'types';
export declare const getShapeProps: (shapeInfo: ShapeInfo) => (type: AvailableShapes) => {
    width: string | number;
    height: string | number;
} | {
    cx: number;
    cy: number;
    r: number;
};
export declare const getSvgProps: (shapeInfo: ShapeInfo) => (type: AvailableShapes) => {
    width: string | number;
    height: string | number;
} | {
    width: string | number;
    height: string | number;
};
