import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useAuth } from '../AuthProvider';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CourseComponent from '../components/CourseComponent';
import AvatarComponent from '../components/AvatarComponent';
import VerticalView from '../components/VerticalView';


const HeaderText = styled.Text`
font-size: 30px;
font-weight: bold;
margin-left: 25px;
margin-top: 20px;
`;

const EventImage = styled.Image`
  width: 90%;
  height: 250px;
  border-radius: 25px;
  background-color: grey;
  margin-top: 25px;
  margin-left: 5%;
`;

export default function Home() {
  const { login } = useAuth();
  const navigation = useNavigation();

  return (
    <View>
      <VerticalView>
        <HeaderText>Акция недели</HeaderText>
        <EventImage source={require('../assets/event.png')} />
        <HeaderText>Курсы</HeaderText>
        <CourseComponent />
        <VerticalView>
          <HeaderText>Менторы</HeaderText>
          <AvatarComponent />
        </VerticalView>
      </VerticalView>
    </View>
  );
}
