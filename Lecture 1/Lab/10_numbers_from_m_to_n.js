function solve(m, n) {
    while(m >= n) {
        console.log(m)
        m--;
    }
}

// solution with for loop

function for_loop(m, n) {
    for(m; m >=n; m--)
        console.log(m)
}

for_loop(6,2)