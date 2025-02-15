//1
let arr=[-12, -8 , -7, -5, 2, 4, 5, 11, 15]
let squaredArr=arr.map(each=>(each ** 2))
squaredArr.sort((a,b)=> a-b)
console.log(squaredArr)
//

//2
class ImmutableClass {
    constructor(name, id, dateOfJoining, addresses) {
        this.name = name;
        this.id = id;
        this.dateOfJoining = new Date(dateOfJoining.getTime()); // Ensure immutability
        this.addresses = Object.freeze([...addresses]); // Freeze array (shallow freeze)

        Object.freeze(this); // Freeze the entire object
    }
}
//

//3
let balls = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G'];
balls.sort()
console.log(balls);
//

//4
function minPlatforms(arr, dep) {
    arr = arr.map(time => Number(time.replace(":", ""))).sort((a, b) => a - b);
    dep = dep.map(time => Number(time.replace(":", ""))).sort((a, b) => a - b);

    let platforms = 0, maxPlatforms = 0;
    let i = 0, j = 0;

    while (i < arr.length && j < dep.length) {
        if (arr[i] <= dep[j]) { 
            platforms++;
            maxPlatforms = Math.max(maxPlatforms, platforms);
            i++;
        } else {
            platforms--;
            j++;
        }
    }
    return maxPlatforms;
}
//

//5



console.log(minPlatforms(["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"], 
                         ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"])); 
console.log(minPlatforms(["9:00", "9:40"], ["9:10", "12:00"]))

