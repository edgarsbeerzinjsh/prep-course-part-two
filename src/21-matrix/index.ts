/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  //givenNumbers: string;
  constructor(private matrix: string) {
    let byRows: any = matrix.split(/\n/)
    for (let i = 0; i < byRows.length; i++) {
      byRows[i] = byRows[i].split(" ")
    }
    this.matrix = byRows
  }



  get rows() {
    let byRow: any = [];
    for (let i = 0; i < this.matrix.length; i++) {
      byRow[i] = [];
      for (let j = 0; j < this.matrix[0].length; j++) {
        byRow[i][j] = Number(this.matrix[i][j]);
      };
    };
    return byRow;
  }

  get columns() {
    let byCol: any = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
        byCol[i] = [];
        for (let j = 0; j < this.matrix.length; j++) {
            byCol[i][j] = Number(this.matrix[j][i]);
        };
    };
    return byCol;
  }
}

export { Matrix };
