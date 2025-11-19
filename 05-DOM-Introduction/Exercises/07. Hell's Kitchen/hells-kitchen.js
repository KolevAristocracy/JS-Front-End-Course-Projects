function solve() {
    const input = document.querySelector('#inputs > textarea').value
    const data = JSON.parse(input)
    const restaurantInfo = {}

    for (let element of data) {
        let [restaurantName, employees] = element.split(' - ')
        if (!Object.hasOwn(restaurantInfo, restaurantName)) restaurantInfo[restaurantName] = [];

        for (let [employeeName, employeeSalary] of employees.split(', ').map((w) => w.split(" "))) {
            restaurantInfo[restaurantName].push({ name: employeeName, salary: Number(employeeSalary) })
        }
    }

    let bestRestaurant = "";
    let bestAvgSalary = 0;

    for (const restaurant in restaurantInfo) {
        const staff = restaurantInfo[restaurant]
        if (staff.length === 0) continue;

        const avgSalary = staff.reduce((a, c) => a + c.salary, 0) / staff.length;
        if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            bestRestaurant = restaurant;
        }
    }

    const bestStaff = restaurantInfo[bestRestaurant]
    const bestSalary = Math.max(...bestStaff.map((w) => w.salary));

    const bestRestaurantOutput = document.querySelector("div#outputs > div#bestRestaurant > p");
    bestRestaurantOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

    const bestStaffOutput = document.querySelector("div#outputs > div#workers > p");
    bestStaffOutput.textContent = bestStaff
        .sort((a, b) => b.salary - a.salary)
        .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(" ");

}