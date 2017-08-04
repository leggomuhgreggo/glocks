export const getIntercept = ({ slope, x, y }) => y - slope * x;
export const getSlope = ({ x1, y1, x2, y2 }) => (y2 - y1) / (x2 - x1);
