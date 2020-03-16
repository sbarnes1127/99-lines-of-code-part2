document.addEventListener("DOMContentLoaded", function () {
    let Friends = ['John', 'Shelby', 'Rachel', 'Brenna', 'Liz'];

    for (let f = 0; f < Friends.length; f++) {
        let friend = Friends[f];
        let btn = document.getElementById('singBtn');
        btn.addEventListener("click", function () {
            let div = document.createElement('div');
            div.className = 'friend';
            let h3 = document.createElement('h3');
            let h3Text = document.createTextNode(friend);
            h3.appendChild(h3Text);
            div.appendChild(h3);
            document.body.appendChild(div);

            
            for (let s = 99; s > 0; s--) {
                let minusOne = s - 1;
                if (s === 1) {
                    let lastLineP = document.createElement('p');
                    let lastLinePText = document.createTextNode("1 line of code in the file, 1 line of code, " + friend + " strikes one out, clears it all out, no more lines of code in the file");
                    lastLineP.appendChild(lastLinePText);
                    div.appendChild(lastLineP);
                } else if (s === 2) {
                    let twoLinesP = document.createElement('p');
                    let twoLinesPText = document.createTextNode(s + " lines of code in the file, " + s + " lines of code; " + friend + " strikes one out, clears it all out, 1 line of code in the file");
                    twoLinesP.appendChild(twoLinesPText);
                    div.appendChild(twoLinesP);

                } else {
                    let p = document.createElement('p');
                    let pText = document.createTextNode(s + " lines of code in the file, " + s + " lines of code; " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file");
                    p.appendChild(pText);
                    div.appendChild(p);
                }

            }

            
        })
    }
})