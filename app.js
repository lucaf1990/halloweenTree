function createCenteredtree(height) {
    let tree = '';
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let row = '';
        for (let j = 0; j < i; j++) {
            const randomValue = Math.floor(Math.random() * 5);
            if (randomValue === 0 ) {
                row += '🌿';
            } else if (randomValue === 1) {
                row += '🍂';
            } else if (randomValue === 2) {
                row += '🎃';
            } else if (randomValue === 3) {
                row += '👻';
            }else if (randomValue === 4) {
                row += '✨';
            }
        }
        tree += spaces + row + '\n';
    }

    let trunkHeight = Math.floor(height / 3);
    let trunkWidth = Math.floor(height / 5);
    let trunkSpaces = ' '.repeat(height - trunkWidth -2);

    for (let i = 0; i < trunkHeight; i++) {
        let trunk = '🪵'.repeat(trunkWidth * 2 -1);
        tree += trunkSpaces + trunk + '\n';
    }

    document.getElementById('tree').textContent = tree;
}


function createHappyHalloween() {
    const textArt = [
        " 🎃   👻   🎃   👻  🎃   👻  🎃   👻  ",
        " /  / / / / / / / / / / /  / / / / / / / / / / / / /",
   "| H    A    P    P    Y           H    A    L    L 🎃 W    E    E    N |",
        " \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\  \\",
        "   🎃   👻   🎃   👻  🎃   👻  🎃   👻 "
    ];

    let halloweenTextArt = '';
    for (let line of textArt) {
        halloweenTextArt += line + '\n';
    }

    document.getElementById('happy-halloween').textContent = halloweenTextArt;
    halloweenTextArt.cl
}
function toggleDecoration() {
    const decorationContainer = document.getElementById('decoration');
    const currentContent = decorationContainer.textContent.trim();
    if (currentContent === '') {
        createCenteredtree(20);
        createHappyHalloween();
    } 
}


setInterval(toggleDecoration, 300); 
