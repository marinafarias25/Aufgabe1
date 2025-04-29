function callHotline() {
    const callSound = document.getElementById('callSound');
    callSound.play();

    const inputs = document.querySelectorAll('.number-inputs input');
    let enteredCode = '';
    inputs.forEach(input => enteredCode += input.value);

    const correctCode = "1122334455"; // Die richtige Hotline-Nummer

    if (enteredCode === correctCode) {
        setTimeout(() => {
            document.getElementById('instruction').classList.remove('hidden');
        }, 2000);
    } else {
        setTimeout(() => {
            alert("❌ Falsche Nummer! Versucht es nochmal.");
        }, 1000);
    }
}

// --- AUTOMATISCHES SPRINGEN ---
const inputs = document.querySelectorAll('.number-inputs input');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Fokus auf nächstes Feld
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value === '' && index > 0) {
            inputs[index - 1].focus(); // Fokus auf vorheriges Feld bei Löschen
        }
    });
});