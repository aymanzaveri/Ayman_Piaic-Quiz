"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function animateText(text) {
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
        }
        else {
            console.log("❌ Incorrect! The correct answer is " + question.correctAnswer + ".\n");
        }
    }
    await animateText(`🎉 Quiz Completed! You scored ${score} out of ${questions.length}! 🎉`);
    rl.close();
}
function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}
if (require.main === module) {
    main();
}
