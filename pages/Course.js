import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

const CourseView = styled.ScrollView`
    flex-direction: column;
    height: auto;
`;

const CourseName = styled.Text`
    font-size: 38px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 25px;
`;

const CourseImage = styled.Image`
    width: 100%;
    height: 230px;
`;

const CourseText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    margin: 25px;
`;

const LessonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 25px;
`;

const VideoContainer = styled.View`
    margin: 20px 25px;
    height: 200px;
`;

const StartTaskButton = styled.TouchableOpacity`
    background-color: #6200ee;
    padding: 10px;
    margin-top: 10px;
    align-items: center;
    border-radius: 5px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 25px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

const videos = [
    { id: '1', title: 'Урок 1', videoUrl: 'https://www.youtube.com/embed/fTGuTEQCsZY?controls=1&modestbranding=1&showinfo=0&rel=0' },
    { id: '2', title: 'Урок 2', videoUrl: 'https://www.youtube.com/embed/P7RXL2O56Cw?controls=1&modestbranding=1&showinfo=0&rel=0' },
    { id: '3', title: 'Урок 3', videoUrl: 'https://www.youtube.com/embed/iZ2-yXzLqCg?controls=1&modestbranding=1&showinfo=0&rel=0' },
];

export default function Course() {
    const navigation = useNavigation();

    return (
        <CourseView>
            <CourseImage source={require('../assets/course1.png')} />
            <CourseName>Полное сопровождение</CourseName>
            <CourseText>Этот курс включает в себя задания на данной платформе и онлайн видео-уроки с менторами которые будут помогать вам с подачей и сбором документов для поступления в лучшие ВУЗы заграницей!
            </CourseText>
            {videos.map((video) => (
                <View key={video.id}>
                    <LessonText>{video.title}</LessonText>
                    <VideoContainer>
                        <WebView
                            source={{ uri: video.videoUrl }}
                            style={{ flex: 1 }}
                        />
                    </VideoContainer>
                    <StartTaskButton onPress={() => navigation.navigate('Task')}>
                        <ButtonText>Начать задание</ButtonText>
                    </StartTaskButton>
                </View>
            ))}
        </CourseView>
    );
};
