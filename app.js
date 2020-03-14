let Friends = ['John', 'Shelby', 'Rachel', 'Brenna', 'Liz'];

for (let f = 0; f < Friends.length; f++) {
    let friend = Friends[f];
    let btn = document.getElementById('singBtn');
    btn.addEventListener("click", function () {
        console.group(friend.toUpperCase());
        for (let s = 99; s > 0; s--) {
            let minusOne = s - 1;
            if (s === 1) {
                console.log("1 line of code in the file, 1 line of code, " + friend + " strikes one out, clears it all out, no more lines of code in the file");
            } else if (s === 2) {
                console.log(s + " lines of code in the file, " + s + " lines of code; " + friend + " strikes one out, clears it all out, 1 line of code in the file");

            } else {
                console.log(s + " lines of code in the file, " + s + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
            }

        }

        console.groupEnd();
    })
}