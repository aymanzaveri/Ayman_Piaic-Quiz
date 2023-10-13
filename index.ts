import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateText(text: string): Promise<void> {
    for (let i = 0; i < text.length; i++) {
        process.stdout.write(text[i]);
        await delay(50);
    }
    console.log();
}

async function main() {
    console.clear();

    await animateText("📚 Welcome to the Quiz App! 🤓");

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["A. Paris", "B. Berlin", "C. London"],
            correctAnswer: "A"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["A. Earth", "B. Mars", "C. Venus"],
            correctAnswer: "B"
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["A. Elephant", "B. Blue Whale", "C. Giraffe"],
            correctAnswer: "B"
        }
    ];

    let score = 0;

    for (const [index, question] of questions.entries()) {
        console.log(`\nQuestion ${index + 1}: ${question.question}`);
        for (const choice of question.choices) {
            console.log(choice);
        }

        const userAnswer = await askQuestion(`\nYour answer (A/B/C): `);
        if (userAnswer.toUpperCase() === question.correctAnswer) {
            console.log("👏 Correct!\n");
            score++;
        } else {
            console.log("❌ Incorrect! The correct answer is " + question.correctAnswer + ".\n");
        }
    }

    await animateText(`🎉 Quiz Completed! You scored ${score} out of ${questions.length}! 🎉`);

    rl.close();
}

function askQuestion(question: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

if (require.main === module) {
    main();
}
