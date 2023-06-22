type Multiple = A | B;
type A = {
    a: string;
    first: boolean;
};
type B = {
    b: number;
    second: Date;
};
declare function a_or_b(p: Multiple): void;
