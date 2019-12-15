import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: black;
  padding-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Top = styled.View`
  z-index: 10;
  margin-top: 15%;
  margin-left: 5%;
  position: absolute;
  top: 1;
  left: 0;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeftButton = styled.View`
  height: 55px;
  width: 55px;
  background-color: gold;
  align-items: center;
  justify-content: center;
  border-radius: 100;
`;
export const HeaderView = styled.View`
  /* flex: 1; */
  /* border-bottom: 3px solid gold; */
  padding-top: 10%;
  padding-bottom: 10%;
  /* margin-bottom: 10%; */
`;

export const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1;
  color: white;
  /* border-style: solid;
  border-bottom-color: gold;
  border-bottom-width: 3px; */
  text-align: center;
`;
export const SubHeaderText = styled.Text`
  margin-top: 5%;
  font-size: 14px;
  /* font-weight: bold; */
  letter-spacing: 1;
  color: gray;
  text-align: center;
`;
export const RegularView = styled.View`
  padding-top: 40%;
  padding-bottom: 10%;
`;
export const RegularText = styled.Text`
  font-size: 20px;
  color: white;
  letter-spacing: 1;
  text-align: left;
`;
export const SummaryView = styled.View`
  padding-top: 25%;
  padding-bottom: 10%;
`;
export const SummaryHeader = styled.Text`
  font-size: 16px;
  color: white;
  letter-spacing: 1;
  text-align: left;
`;
export const SummaryText = styled.Text`
  letter-spacing: 1;
  font-size: 15px;
  color: white;
  margin-bottom: 3%;
  border-style: solid;
  border-bottom-color: gold;
  border-bottom-width: 3px;
`;
export const SummaryMainHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  letter-spacing: 1;
  margin-bottom: 3%;
  border-style: solid;
  border-bottom-color: gold;
  border-bottom-width: 3px;
`;
export const ErrorContainer = styled.Modal`
  z-index: 10;
  /* background-color: red; */
  width: 75%;
  height: 50%;
  align-self: center;
  justify-content: center;
`;
export const ErrorWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const ErrorView = styled.View`
  width: 300px;
  height: 130px;
  border-radius: 5;
  background-color: red;
  margin-top: 10%;
  /* text-align: center; */
`;

export const ErrorText = styled.Text`
  color: white;
  font-size: 15px;
  /* text-align: center; */
  margin: 5% 5% 5% 5%;
`;
// export const ConfirmView = styled.View`
//   margin-bottom: 10%;
//   padding-bottom: 25%;
//   padding-top: 0%;
// `;
export const ButtonContainer = styled.View`
  height: 55px;
  width: 100%;
  background-color: gold;
  /* padding-top: 10%; */
  /* margin: 10% 0 0 0; */
  align-items: center;
  justify-content: center;
  border-radius: 100;
  /* padding-bottom: 100px; */
  margin-bottom: 5%;
`;

export const ButtonText = styled.Text`
  /* justify-content: center; */
  /* justify-self: auto; */

  font-size: 20;
  letter-spacing: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: black;
  padding-bottom: 5%;
`;
export const AnimationView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  /* height: 25%; */
`;
export const AnimationHeaderView = styled.View`
  /* flex: 1; */
  /* border-bottom: 3px solid gold; */
  padding-top: 10%;
  padding-bottom: 10%;
  /* margin-bottom: 10%; */
`;
export const AnimationHeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1;
  color: white;
  text-align: center;
`;
