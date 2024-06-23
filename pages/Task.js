import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

const TaskList = styled.ScrollView`
  width: 100%;
  padding: 20px;
`;

const TaskItem = styled.View`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const TaskDescription = styled.Text`
  font-size: 16px;
  color: #666666;
  margin-top: 5px;
`;

const Task = () => {
  const navigation = useNavigation();
  const tasks = [
    { title: 'Math Practice', description: 'Complete 20 algebra questions.' },
    { title: 'Reading Comprehension', description: 'Read and analyze the provided passage.' },
    { title: 'Vocabulary Building', description: 'Learn 50 new SAT vocabulary words.' },
    { title: 'Writing Practice', description: 'Write an essay on the given topic.' },
  ];

  return (
    <Container>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem onTouchEnd={() => navigation.navigate('Math')} key={index}>
            <TaskTitle>{task.title}</TaskTitle>
            <TaskDescription>{task.description}</TaskDescription>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Task;
