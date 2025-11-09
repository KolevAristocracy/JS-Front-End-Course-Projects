/**
 * 
 * @param {JSON} jsonString 
 */

function covertToObject(jsonString) {
    const obj = JSON.parse(jsonString)
    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
        
    }
    
}



covertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
covertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
