function printNumbers(from, to) {
    if (from <= to) {
        for (let i = from; i <= to; i++) {
            setTimeout(() => console.log(i), i * 1000);
        }
    } else {
        console.log("Starting number is lower than ending number.");
    }
}

printNumbers(1, 10)