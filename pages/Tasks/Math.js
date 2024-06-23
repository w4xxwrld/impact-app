import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
`;

const QuestionContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AnswerOption = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? '#6200ee' : '#ffffff')};
  border-radius: 5px;
  margin-bottom: 10px;
  border: 1px solid #6200ee;
`;

const AnswerText = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.isSelected ? '#ffffff' : '#6200ee')};
`;

const FeedbackText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${(props) => (props.isCorrect ? 'green' : 'red')};
`;

const Math = () => {
  const questions = [
    {
      id: 1,
      question: 'What is 5 + 7?',
      options: ['10', '12', '13', '15'],
      correctAnswer: '12',
    },
    {
      id: 2,
      question: 'Solve for x: 2x + 3 = 7',
      options: ['1', '2', '3', '4'],
      correctAnswer: '2',
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleAnswerPress = (questionId, option) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionId]: option,
    }));

    const isCorrect = questions.find((q) => q.id === questionId).correctAnswer === option;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionId]: isCorrect ? 'Correct!' : 'Wrong answer!',
    }));
  };

  return (
    <Container>
      {questions.map((question) => (
        <QuestionContainer key={question.id}>
          <QuestionText>{question.question}</QuestionText>
          {question.options.map((option) => (
            <AnswerOption
              key={option}
              onPress={() => handleAnswerPress(question.id, option)}
              isSelected={selectedAnswers[question.id] === option}
            >
              <AnswerText isSelected={selectedAnswers[question.id] === option}>{option}</AnswerText>
            </AnswerOption>
          ))}
          {feedback[question.id] && <FeedbackText isCorrect={feedback[question.id] === 'Correct!'}>{feedback[question.id]}</FeedbackText>}
        </QuestionContainer>
      ))}
    </Container>
  );
};

export default Math;
