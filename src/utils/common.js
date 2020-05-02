import Colors from "../constants/Colors";

export const headerOptions = (headerTitle = "DHAN-GAADI") => ( {
    title: headerTitle,
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: Colors.headerTintColor,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  })
