function displayFormalGreeting() {
    const name = document.getElementById('name').value;
    const greeting = document.getElementById('greeting');
    
    if (name !== '') {
        const greetings = [
            `Good morning, ${name}!`,
            `Hello, ${name}. Welcome!`,
            `Hi ${name}, hope you're doing well.`,
            `Greetings, ${name}.`,
            `Dear ${name}, hello!`
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greeting.innerText = randomGreeting;
    } else {
        greeting.innerText = 'Please enter your name!';
        document.getElementById('name').focus();  // Focus the input if no name entered
    }
}
