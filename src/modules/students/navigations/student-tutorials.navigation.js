import { TabNavigator } from "react-navigation";
import TutorialsList from "../screens/tutorialsList";
import StudentAgenda from "../screens/studentAgenda";
import React from "react";
import { Fonts } from "../../../config/eStyleSheet";

const StudentTutorials = TabNavigator({
  tutorialsList: { screen: TutorialsList },
  studentAgenda: { screen: StudentAgenda }
}, {
  animationEnabled: true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 13,
      fontFamily: Fonts.regular
    }
  }
});

export default StudentTutorials;