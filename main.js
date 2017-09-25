class Name {
    constructor(...args) {
        [this.fn, this.ln] = args;
    }

    say() {
        return this.fn +' '+ this.ln;
    }
}

let p = new Name('amit', 'shri');
console.log(p.say());