let date = prompt("Random tarix daxil edin: YYYY.MM.DD");
let space = date.split(".");
if (space[1] == 1) {
    console.log(space[2] + " " + "yanvar" + " " + space[0] + "-cu il");
} else if (space[1] == 2) {
    console.log(space[2] + " " + "fevral" + " " + space[0] + "-cu il");
}else if (space[1] == 3) {
    console.log(space[2] + " " + "mart" + " " + space[0] + "-cu il");
}else if (space[1] == 4) {
    console.log(space[2] + " " + "aprel" + " " + space[0] + "-cu il");
}else if (space[1] == 5) {
    console.log(space[2] + " " + "may" + " " + space[0] + "-cu il");
}else if (space[1] == 6) {
    console.log(space[2] + " " + "iyun" + " " + space[0] + "-cu il");
}else if (space[1] == 7) {
    console.log(space[2] + " " + "iyul" + " " + space[0] + "-cu il");
}else if (space[1] == 8) {
    console.log(space[2] + " " + "avqust" + " " + space[0] + "-cu il");
}else if (space[1] == 9) {
    console.log(space[2] + " " + "sentyabr" + " " + space[0] + "-cu il");
}else if (space[1] == 10) {
    console.log(space[2] + " " + "oktyabr" + " " + space[0] + "-cu il");
}else if (space[1] == 11) {
    console.log(space[2] + " " + "noyabr" + " " + space[0] + "-cu il");
}else if (space[1] == 12) {
    console.log(space[2] + " " + "dekabr" + " " + space[0] + "-cu il");
}
