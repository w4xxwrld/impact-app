import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const courses = [
    { id: 1, title: 'SAT Math', image: require('../assets/satamth.jpg'), teacher: 'Продолжительность: 3 месяца' },
    { id: 2, title: 'IELTS', image: require('../assets/ielts.png'), teacher: 'Продолжительность: 6 месяцев' },
    { id: 3, title: 'Полная подготовка', image: require('../assets/help.png'), teacher: 'Продолжительность: 1 год' },
    { id: 4, title: 'Летний лагерь', image: require('../assets/summercamp.png'), teacher: 'Продолжительность: 3 недели' },
];

const Courses = styled.View`
  width: 250px;
  height: 200px;
  border-radius: 25px;
  background-color: grey;
  margin-top: 25px;
  margin-left: 10px;
`;

const CourseImage = styled.Image`
  width: 100%;
  height: 70%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const CourseDetails = styled.View`
  padding-top: 5px;
  padding-left: 25px;
`;

const CourseTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const CourseTeacher = styled.Text`
  font-size: 14px;
`;

const HorizontalContainer = styled.ScrollView`
  width: auto;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
`;

const CourseComponent = () => {
    const navigation = useNavigation();

    const handleCourse = () => {
        navigation.navigate('Course');
    };

    return (
      <HorizontalContainer horizontal={true}>
            {courses.map((course) => (
                <TouchableOpacity key={course.id} onPress={handleCourse}>
                    <Courses>
                        <CourseImage source={course.image} />
                        <CourseDetails>
                            <CourseTitle>{course.title}</CourseTitle>
                            <CourseTeacher>{course.teacher}</CourseTeacher>
                        </CourseDetails>
                    </Courses>
                </TouchableOpacity>
            ))}
        </HorizontalContainer>
    );
};

export default CourseComponent;
