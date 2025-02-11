import { Table } from "../src/index";

export { Test1 as Test };

export class Test1 extends Table {

    constructor() {
        super();
        this
            .target("placeholder")
            .columns(["Category", "Series-1", "Series-2", "Series-3", "Series-4"])
            .data([
                ["A", -25, -23, -25, -22],
                ["B", -20, -21, -25, -21],
                ["C", -18, -20, -25, -19],
                ["D", -17, -17, -25, -18],
                ["E", -16, -15, -19, -18],
                ["F", -15, -14, -16, -16],
                ["G", -12, -10, -14, -15],
                ["H", -12, -8, -13, -15],
                ["I", -11, -6, -12, -12],
                ["J", -11, -6, -8, -12],
                ["K", -9, 0, -5, -10],
                ["L", -5, 1, -5, -9],
                ["M", -5, 2, -4, -8],
                ["N", -1, 4, -2, -7],
                ["O", 3, 7, 0, -5],
                ["P", 3, 8, 0, -3],
                ["Q", 4, 8, 7, 0],
                ["R", 6, 9, 11, 1],
                ["S", 9, 11, 11, 5],
                ["T", 10, 20, 12, 6],
                ["U", 12, 20, 16, 8],
                ["V", 12, 21, 18, 14],
                ["W", 14, 21, 18, 18],
                ["X", 15, 23, 21, 18],
                ["Y", 21, 23, 23, 21],
                ["Z", 23, 24, 24, 24]
            ])
            .render()
            ;
        // setTimeout(() => {
        //     this.data([
        //         // ["J", -11, -6, -8, -12],
        //         // ["K", -9, 0, -5, -10],
        //         // ["L", -5, 1, -5, -9],
        //     ]).lazyRender();
        // }, 3000);
    }
}

globalThis["app"] = new Test1();
