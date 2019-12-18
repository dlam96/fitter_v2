import React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  CardView,
  NameContainer,
  NameText,
  ImageView,
  MatchView,
  MatchText,
  DescriptionText,
  ActionsView,
  ActionsButton
} from "./styledComponents";
// Actions to show buttons
// Variant for responsive images on different screens
const CardItem = ({
  actions,
  id,
  name,
  age,
  image,
  status,
  description,
  matches,
  onPressLeft,
  onPressRight,
  variant
}) => {
  return (
    <CardView>
      <ImageView source={image} />
      <MatchView>
        <MatchText>{matches}% Match!</MatchText>
      </MatchView>
      <NameText>{name}</NameText>
      <DescriptionText>{description}</DescriptionText>
      <ActionsView>
        <ActionsButton onPress={() => onPressLeft(id, name)}>
          <Ionicons name="md-close" size={30} color="black" />
        </ActionsButton>
        <ActionsButton>
          <Ionicons
            name="md-fitness"
            size={30}
            color="black"
            onPress={() => onPressRight()}
          />
        </ActionsButton>
      </ActionsView>
    </CardView>
  );
};

export default CardItem;

// const styles = StyleSheet.create({
//   // containerCardItem: {
//   //   backgroundColor: colors.primary,
//   //   borderRadius: 10,
//   //   alignItems: 'center',
//   //   margin: 10,
//   //   marginTop: 30,
//   //   shadowOpacity: 0.05,
//   //   shadowRadius: 10,
//   //   shadowColor: 'black',
//   //   shadowOffset: {height: 0, width: 0},
//   // },

//   matchesCardItem: {
//     marginTop: -35,
//     backgroundColor: colors.primary,
//     paddingVertical: 7,
//     paddingHorizontal: 20,
//     borderRadius: 20
//   },
//   matchesTextCardItem: {
//     fontFamily: fonts.base,
//     fontSize: 12.5,
//     color: "black",
//     fontFamily: "bold"
//   },

//   descriptionCardItem: {
//     // backgroundColor: 'black',
//     width: "80%",
//     // height: '15%',
//     // fontWeight: 'bold',
//     fontSize: 14,
//     color: "gray",
//     textAlign: "center",
//     marginHorizontal: 5
//     // marginVertical: 5,
//   },
//   status: {
//     paddingBottom: 10,
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   statusText: {
//     color: "#252525",
//     fontSize: 12
//   },
//   online: {
//     width: 6,
//     height: 6,
//     backgroundColor: "#46A575",
//     borderRadius: 3,
//     marginRight: 4
//   },
//   offline: {
//     width: 6,
//     height: 6,
//     backgroundColor: "#D04949",
//     borderRadius: 3,
//     marginRight: 4
//   },
//   actionsCardItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 15
//   },
//   button: {
//     zIndex: 10,
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: colors.primary,
//     marginHorizontal: 7,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowOpacity: 0.15,
//     shadowRadius: 20,
//     shadowColor: "#363636",
//     shadowOffset: { height: 10, width: 0 }
//   },
//   buttonIcon1: {
//     // backgroundColor: 'black',
//     paddingTop: 7,
//     paddingLeft: 15,
//     width: 50,
//     height: 50,
//     borderRadius: 25

//     // width: 50,
//     // height: 50,
//     // borderRadius: 25,
//     // backgroundColor: colors.primary,
//     // marginHorizontal: 7,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // shadowOpacity: 0.15,
//     // shadowRadius: 20,
//     // shadowColor: '#363636',
//     // shadowOffset: {height: 10, width: 0},
//   },
//   miniButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 30,
//     backgroundColor: "white",
//     marginHorizontal: 7,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowOpacity: 0.15,
//     shadowRadius: 20,
//     shadowColor: "#363636",
//     shadowOffset: { height: 10, width: 0 }
//   },
//   like: {
//     color: "black"
//   }
// });
