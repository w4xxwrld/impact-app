import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, Image, Modal, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';

const MentorView = styled.View`
    flex-direction: column;
`;

const MentorName = styled.Text`
    font-size: 38px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 25px;
`;

const MentorImage = styled.Image`
    width: 100%;
    height: 230px;
`;

const MentorText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    margin: 25px;
`;

const OpenFormButton = styled.TouchableOpacity`
    background-color: #6200ee;
    padding: 10px;
    margin: 25px;
    margin-bottom: 25px; 
    border-radius: 10px;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.View`
    width: 80%;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Input = styled.TextInput`
    height: 40px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
`;

const SubmitButton = styled.TouchableOpacity`
    background-color: #6200ee;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
`;

const SubmitButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export default function Mentor() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dateTime, setDateTime] = useState('');

    return (
        <MentorView>
            <MentorImage source={require('../assets/mentor1.png')} />
            <MentorName>Мухаммеддулат Олжабай</MentorName>
            <MentorText>
            Преподаватель SAT – Мухаммеддулат Олжабай{"\n"}{"\n"}

SAT 1510{"\n"}
Выпусник Galaxy International school{"\n"}
Студент Назарбаев Университета{"\n"}
Получил приглашения от Reed College, Fordham University, university of Bologna, Constructor University{"\n"}
Средний балл его студентов – 1410{"\n"}{"\n"}
Если вы хотите поступить за рубеж под его руководством, оставьте заявку ниже!
            </MentorText>
            <OpenFormButton onPress={() => setModalVisible(true)}>
                <ButtonText>Забронировать встречу с ментором</ButtonText>
            </OpenFormButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <ModalContainer>
                    <FormContainer>
                        <Input
                            placeholder="Ваше имя"
                            value={name}
                            onChangeText={setName}
                        />
                        <Input
                            placeholder="Номер телефона"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                        <Input
                            placeholder="День и время"
                            value={dateTime}
                            onChangeText={setDateTime}
                        />
                        <SubmitButton onPress={() => {
                            console.log('Form submitted:', { name, phone, dateTime });
                            setModalVisible(false);
                        }}>
                            <SubmitButtonText>Отправить</SubmitButtonText>
                        </SubmitButton>
                    </FormContainer>
                </ModalContainer>
            </Modal>
        </MentorView>
    );
};
