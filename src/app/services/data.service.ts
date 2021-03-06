import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() { 
    /*
    this.questions = [
      {
        text: "What is your name?",
        answer: "My name is Chandara.",
        hide: true
      },
      {
        text: "What is your favorite color?",
        answer: "My favorite color is red.",
        hide: true
      },
      {
        text: "What is your favorite language?",
        answer: "My favorite language is JavaScript.",
        hide: true
      }
    ];
    */
  }

  //Get Questions Form Local Storage
  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    
    return this.questions;
  }

  //Add Question into Local Storage
  addQuestion(question:Question){
    //show at the below of others
    //this.questions.push(question);

    //show at the top
    this.questions.unshift(question);

    //Init local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];

      //Push new question
      questions.unshift(question);

      //Set new array to Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      
      //Add new question
      questions.unshift(question);

      //Reset Local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  //Remove Question From Local Storage
  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
