import { Component } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { questions } from '../data-types';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent {

  questionData: any[] = [];
  currentQuestion = 0;
  correctAnswers = 0;
  showScore = false;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(data=>{
      this.questionData=data;
    })
  }

  checkAnswer(selectedOption: any): void {
    if (selectedOption.isCorrect) {
      this.correctAnswers++;
    }
  }

  nextQuestion(): void {
    this.currentQuestion++;
    if (this.currentQuestion >= this.questionData.length) {
      this.showScore = true;
    }
  }

  previousQuestion(){
    this.currentQuestion--;
    if (this.currentQuestion >= this.questionData.length) {
      this.showScore = true;
    }
  }

  restartQuiz(): void {
    this.currentQuestion = 0;
    this.correctAnswers = 0;
    this.showScore = false;
  }
}
