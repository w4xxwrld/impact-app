import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import VerticalView from './VerticalView';
import { useNavigation } from '@react-navigation/native';

const avatars = [
    { id: 1, image: require('../assets/avatar.png'), teacher: 'Алижан Нурмухамбетов', subject: 'SAT и IELTS' },
    { id: 2, image: require('../assets/avatar.png'), teacher: 'Эльнур Абылкасымов', subject: 'Немецкий язык, SAT и IELTS' },
    { id: 3, image: require('../assets/avatar.png'), teacher: 'Адия Тлендиева', subject: 'SAT' },
    { id: 4, image: require('../assets/avatar.png'), teacher: 'Мансур Аскар', subject: 'IELTS' },
    { id: 5, image: require('../assets/avatar.png'), teacher: 'Эльмира Калиева', subject: 'SAT и IELTS' },
];

const Avatars = styled.View`
  width: 90%;
  height: 100px;
  border-radius: 25px;
  background-color: grey;
  margin-left: 5%;
  margin-top: 25px;
  flex-direction: row;
  align-items: center;
  padding-right: 25px;
`;

const AvatarImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 25px;
`;

const AvatarDetails = styled.View`
  flex-direction: column;
  padding-left: 25px;
`;

const AvatarTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const AvatarTeacher = styled.Text`
  font-size: 14px;
`;

const IconImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: auto;
`;

const AvatarComponent = () => {
    const navigation = useNavigation();

    const handleMentor = () => {
        navigation.navigate('Mentor')
    };

    return (
        <VerticalView>
            {avatars.map((avatar) => (
                <Avatars key={avatar.id}>
                    <AvatarImage source={avatar.image} />
                    <AvatarDetails>
                        <AvatarTitle>{avatar.teacher}</AvatarTitle>
                        <AvatarTeacher>{avatar.subject}</AvatarTeacher>
                    </AvatarDetails>
                    <IconImage onTouchEnd={handleMentor} source={require('../assets/next.png')} />
                </Avatars>
            ))}
        </VerticalView>
    );
};

export default AvatarComponent;


