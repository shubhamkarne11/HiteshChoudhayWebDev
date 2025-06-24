const readline = require('readline');

// // console.log('Welcome to Tic-Tac-Toe!');
// // const readline = require('readline');

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // const board = [
// //     [' ', ' ', ' '],
// //     [' ', ' ', ' '],
// //     [' ', ' ', ' ']
// // ];

// // let currentPlayer = 'X';

// // function printBoard() {
// //     console.log('  0 1 2');
// //     board.forEach((row, index) => {
// //         console.log(index, row.join('|'));
// //         if (index < 2) console.log('  -----');
// //     });
// // }

// // function resetBoard() {
// //     for (let row = 0; row < 3; row++) {
// //         for (let col = 0; col < 3; col++) {
// //             board[row][col] = ' ';
// //         }
// //     }
// //     currentPlayer = 'X';
// // }

// // function startNewGame() {
// //     rl.question('Do you want to play again? (yes/no): ', (answer) => {
// //         if (answer.toLowerCase() === 'yes') {
// //             resetBoard();
// //             promptMove();
// //         } else {
// //             console.log('Thanks for playing!');
// //             rl.close();
// //         }
// //     });
// // }

// // function isWinner(player) {
// //     // Check rows
// //     for (let row of board) {
// //         if (row.every(cell => cell === player)) return true;
// //     }
// //     // Check columns
// //     for (let col = 0; col < 3; col++) {
// //         if (board.every(row => row[col] === player)) return true;
// //     }
// //     // Check diagonals
// //     if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
// //     if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

// //     return false;
// //     function checkWinner() {
// //         if (isWinner('X')) {
// //             console.log('Player X wins!');
// //             return true;
// //         } else if (isWinner('O')) {
// //             console.log('Player O wins!');
// //             return true;
// //         } else if (isBoardFull()) {
// //             console.log('The game is a draw!');
// //             return true;
// //         }
// //         return false;
// //     }
// // }

// // function isBoardFull() {
// //     return board.every(row => row.every(cell => cell !== ' '));
// // }

// // function makeMove(row, col) {
// //     if (board[row][col] === ' ') {
// //         board[row][col] = currentPlayer;
// //         if (isWinner(currentPlayer)) {
// //             printBoard();
// //             console.log(`Player ${currentPlayer} wins!`);
// //             rl.close();
// //         } else if (isBoardFull()) {
// //             printBoard();
// //             console.log('The game is a draw!');
// //             rl.close();
// //         } else {
// //             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// //             promptMove();
// //         }
// //     } else {
// //         console.log('Invalid move, try again.');
// //         promptMove();
// //     }
// // }

// // function promptMove() {
// //     printBoard();
// //     rl.question(`Player ${currentPlayer}, enter your move (row and column): `, (input) => {
// //         const [row, col] = input.split(' ').map(Number);
// //         if (row >= 0 && row < 3 && col >= 0 && col < 3) {
// //             makeMove(row, col);
// //         } else {
// //             console.log('Invalid input, try again.');
// //             promptMove();
// //         }
// //     });
// // }

// // promptMove();

// // const tasks = [];

// // function addTask(description, dueDate) {
// //     const task = {
// //         id: tasks.length + 1,
// //         description,
// //         dueDate,
// //         completed: false
// //     };
// //     tasks.push(task);
// //     console.log(`Task added: ${description}`);
// // }

// // function deleteTask(id) {
// //     const index = tasks.findIndex(task => task.id === id);
// //     if (index !== -1) {
// //         const removedTask = tasks.splice(index, 1);
// //         console.log(`Task deleted: ${removedTask[0].description}`);
// //     } else {
// //         console.log('Task not found');
// //     }
// // }

// // function listTasks() {
// //     console.log('Tasks:');
// //     tasks.forEach(task => {
// //         console.log(`${task.id}. ${task.description} (Due: ${task.dueDate}) - ${task.completed ? 'Completed' : 'Pending'}`);
// //     });
// // }

// // function setReminder(id, reminderTime) {
// //     const task = tasks.find(task => task.id === id);
// //     if (task) {
// //         const timeUntilReminder = new Date(reminderTime) - new Date();
// //         if (timeUntilReminder > 0) {
// //             setTimeout(() => {
// //                 console.log(`Reminder: ${task.description} is due at ${task.dueDate}`);
// //             }, timeUntilReminder);
// //             console.log(`Reminder set for task: ${task.description}`);
// //         } else {
// //             console.log('Reminder time must be in the future');
// //         }
// //     } else {
// //         console.log('Task not found');
// //     }
// // }

// // // Example usage:
// // addTask('Finish project', '2023-12-31');
// // addTask('Buy groceries', '2023-10-15');
// // listTasks();
// // setReminder(1, '2023-12-30T10:00:00');
// // deleteTask(2);
// // listTasks();

// // let test1 = "CashCare underwent extensive testing with both synthetic and real-world datasets to assess its effectiveness in identifying financial fraud in credit card transactions and online payments. The system utilizes two machine learning models: Random Forest for detecting credit card fraud and XGBoost for online payment fraud, all integrated into a user-friendly desktop application developed with Qt/QML, along with a responsive web interface. The findings highlight the system’s capability to accurately detect fraudulent activities while reducing false positives, as illustrated in Figures 1 through 4. Performance metrics, which include processing time and feedback from 15 users—comprising financial analysts and developers—are presented in Tables I and II, and are consistent with benchmarks from comparable fraud detection systems [6].";
// // let test2 = "CashCare underwent extensive testing with both synthetic and real-world datasets to assess its effectiveness in identifying financial fraud in credit card transactions and online payments. The system utilizes two machine learning models: Random Forest for detecting credit card fraud and XGBoost for online payment fraud, all integrated into a user-friendly desktop application developed with Qt/QML, along with a responsive web interface. The findings highlight the system’s capability to accurately detect fraudulent activities while reducing false positives, as illustrated in Figures 1 through 4. Performance metrics, which include processing time and feedback from 15 users—comprising financial analysts and developers—are presented in Tables I and II, and are consistent with benchmarks from comparable fraud detection systems [6].";
// // let test3 = "CashCare underwent extensive testing with both synthetic and real-world datasets to assess its effectiveness in identifying financial fraud in credit card transactions and online payments. The system utilizes two machine learning models: Random Forest for detecting credit card fraud and XGBoost for online payment fraud, all integrated into a user-friendly desktop application developed with Qt/QML, along with a responsive web interface. The findings highlight the system’s capability to accurately detect fraudulent activities while reducing false positives, as illustrated in Figures 1 through 4. Performance metrics, which include processing time and feedback from 15 users—comprising financial analysts and developers—are presented in Tables I and II, and are consistent with benchmarks from comparable fraud detection systems [6].";
// // if(test1 === test2){
// //     console.log("test1 and test2 are equal");
// // }
// // if(test1 === test3){
// //     console.log("test1 and test3 are equal");
// // }
// // if(test2 === test3){
// //     console.log("test2 and test3 are equal");
// // }
// // if(test1 !== test2){
// //     console.log("test1 and test2 are not equal");
// // }
// // if(test1 !== test3){
// //     console.log("test1 and test3 are not equal");
// // }
// // if(test2 !== test3){
// //     console.log("test2 and test3 are not equal");
// // }




// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ];

// let currentPlayer = 'X';

// function printBoard() {
//     console.log('  0 1 2');
//     board.forEach((row, index) => {
//         console.log(index, row.join('|'));
//         if (index < 2) console.log('  -----');
//     });
// }

// function resetBoard() {
//     for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//             board[row][col] = ' ';
//         }
//     }
//     currentPlayer = 'X';
// }

// function startNewGame() {
//     rl.question('Do you want to play again? (yes/no): ', (answer) => {
//         if (answer.toLowerCase() === 'yes') {
//             resetBoard();
//             promptMove();
//         } else {
//             console.log('Thanks for playing!');
//             rl.close();
//         }
//     });
// }

// function isWinner(player) {
//     for (let row of board) {
//         if (row.every(cell => cell === player)) return true;
//     }
//     for (let col = 0; col < 3; col++) {
//         if (board.every(row => row[col] === player)) return true;
//     }
//     if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
//     if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

//     return false;
// }

// function isBoardFull() {
//     return board.every(row => row.every(cell => cell !== ' '));
// }

// function makeMove(row, col) {
//     if (board[row][col] === ' ') {
//         board[row][col] = currentPlayer;
//         if (isWinner(currentPlayer)) {
//             printBoard();
//             console.log(`Player ${currentPlayer} wins!`);
//             startNewGame();
//         } else if (isBoardFull()) {
//             printBoard();
//             console.log('The game is a draw!');
//             startNewGame();
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             promptMove();
//         }
//     } else {
//         console.log('Invalid move, try again.');
//         promptMove();
//     }
// }

// function promptMove() {
//     printBoard();
//     rl.question(`Player ${currentPlayer}, enter your move (row and column): `, (input) => {
//         const [row, col] = input.split(' ').map(Number);
//         if (row >= 0 && row < 3 && col >= 0 && col < 3) {
//             makeMove(row, col);
//         } else {
//             console.log('Invalid input, try again.');
//             promptMove();
//         }
//     });
// }

// promptMove();

const words = ['nodejs', 'react', 'angular', 'vue', 'svelte'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let attemptsLeft = 6;
let hintGiven = false;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayWord() {
    let display = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    console.log(display);
}

function giveHint() {
    if (!hintGiven) {
        const hintLetter = selectedWord.split('').find(letter => !guessedLetters.includes(letter));
        console.log(`Hint: The word contains the letter '${hintLetter}'`);
        hintGiven = true;
    } else {
        console.log('Hint already given.');
    }
}

function promptGuess() {
    displayWord();
    console.log(`Attempts left: ${attemptsLeft}`);
    rl.question('Guess a letter or type "hint" for a hint: ', (input) => {
        if (input.toLowerCase() === 'hint') {
            giveHint();
        } else if (input.length !== 1 || !/[a-z]/i.test(input)) {
            console.log('Please enter a single letter.');
        } else if (guessedLetters.includes(input)) {
            console.log('You already guessed that letter.');
        } else {
            guessedLetters.push(input);
            if (!selectedWord.includes(input)) {
                attemptsLeft--;
                console.log('Incorrect guess.');
            }
        }

        if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
            console.log(`Congratulations! You guessed the word: ${selectedWord}`);
            rl.close();
        } else if (attemptsLeft > 0) {
            promptGuess();
        } else {
            console.log(`Game over! The word was: ${selectedWord}`);
            rl.close();
        }
    });
}

promptGuess();
// const words = ['nodejs', 'react', 'angular', 'vue', 'svelte'];
// let selectedWord = words[Math.floor(Math.random() * words.length)];
// let guessedLetters = [];
// let attemptsLeft = 6;

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function displayWord() {
//     let display = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
//     console.log(display);
// }

// function promptGuess() {
//     displayWord();
//     console.log(`Attempts left: ${attemptsLeft}`);
//     rl.question('Guess a letter: ', (guess) => {
//         if (guess.length !== 1 || !/[a-z]/i.test(guess)) {
//             console.log('Please enter a single letter.');
//         } else if (guessedLetters.includes(guess)) {
//             console.log('You already guessed that letter.');
//         } else {
//             guessedLetters.push(guess);
//             if (!selectedWord.includes(guess)) {
//                 attemptsLeft--;
//                 console.log('Incorrect guess.');
//             }
//         }

//         if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
//             console.log(`Congratulations! You guessed the word: ${selectedWord}`);
//             rl.close();
//         } else if (attemptsLeft > 0) {
//             promptGuess();
//         } else {
//             console.log(`Game over! The word was: ${selectedWord}`);
//             rl.close();
//         }
//     });
// }

// promptGuess();


