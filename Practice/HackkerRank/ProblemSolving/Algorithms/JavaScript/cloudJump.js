function jumpingOnClouds(cloud) {
    // Find the length of the string
    let n = cloud.length;
    // Initialize count to -1, since the no.of steps = steps - 1
    let count = -1;
    // loop to find the jump can be 1 step or two steps, remember the loop range(i)
    for (let i = 0; i < n; i++, count++) {
        if (i < n - 2 && cloud[i + 2] === 0) {
            i++;
        }
    }
    return count;

}
console.log(jumpingOnClouds([0, 0, 1, 0, 1, 0, 0, 0, 1, 0]))