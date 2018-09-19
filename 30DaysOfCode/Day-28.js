function main() {
    const N = parseInt(readLine(), 10);
    const names = [];
    const regName = /[a-z]{1,20}/
    const regEmail = /^([a-z\.]){1,40}@gmail\.com$/;
    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        if(regEmail.test(emailID) && regName.test(firstName)){
            names.push(firstName);
        }
    }
    names.sort().map(name=>console.log(name));
    
}