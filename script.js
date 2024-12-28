// JavaScript to make the magic work!

// Magic Button - Reveals Hidden Message
document.getElementById('revealMessage').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('extraMessage');
    hiddenMessage.style.display = 'block'; // Reveals the hidden message
    document.getElementById('revealMessage').disabled = true; // Disables the button after click
    triggerMagicEffect();
});

// Wish Portal - Sends Wish
document.getElementById('wishButton').addEventListener('click', function() {
    const wishInput = document.getElementById('wishInput').value;
    const wishDisplay = document.getElementById('wishResult');
    if (wishInput) {
        wishDisplay.textContent = `Your wish: "${wishInput}" has been sent to the magical world!`;
        wishDisplay.style.color = '#ff9dff';
        triggerMagicEffect();
    } else {
        wishDisplay.textContent = 'Please type a magical wish!';
        wishDisplay.style.color = '#ff3cbe';
    }
});

// Balloon Pop Effect - Create Balloons Dynamically
function createBalloons() {
    const balloonContainer = document.getElementById('balloonContainer');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 90}%`; // Randomize the position of balloons
    balloon.addEventListener('click', function() {
        balloon.style.animation = 'none'; // Stop the balloon animation
        balloon.style.transform = 'scale(0)'; // Shrinks the balloon
        setTimeout(() => balloon.remove(), 200); // Remove balloon after click
        triggerBalloonExplosion();
    });
    balloonContainer.appendChild(balloon);
}

// Trigger Balloon Explosion - Creates Sparkles on Balloon Click
function triggerBalloonExplosion() {
    const particles = document.createElement('div');
    particles.classList.add('particles');
    document.body.appendChild(particles);
    setTimeout(() => particles.remove(), 1000); // Remove particles after 1 second
}

// Trigger Magic Effects - Random Sparkles and Particles
function triggerMagicEffect() {
    const magicParticles = document.createElement('div');
    magicParticles.classList.add('particles');
    magicParticles.style.left = `${Math.random() * 100}%`;
    magicParticles.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(magicParticles);
    setTimeout(() => magicParticles.remove(), 1000); // Remove particles after 1 second
}

// Create Balloons every 3 seconds
setInterval(createBalloons, 3000);

// Follow the Mouse with Magic Text
document.querySelector('.magic-message').addEventListener('mousemove', function(e) {
    const magicText = document.querySelector('.text-follower');
    magicText.style.left = `${e.clientX - 100}px`; // Position the text based on mouse X
    magicText.style.top = `${e.clientY - 50}px`; // Position the text based on mouse Y
});

// Initialize Background Music (Optional)
let audio = new Audio('./magical-sound-effect-7137.mp3');
audio.loop = true;
audio.play();

// Ensure the audio volume is not too high
audio.volume = 0.99;
