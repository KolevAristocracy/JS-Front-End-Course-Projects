function nXnMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => n));

    for (const row of matrix) {
        console.log(row.join(" "));
        
    }
}

nXnMatrix(3)
nXnMatrix(7)
nXnMatrix(2)
