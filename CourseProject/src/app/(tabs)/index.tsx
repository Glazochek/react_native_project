import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "#design/elements/Typegraphy";
import { IssPositionCard, SolarWeatherCard } from "#shared/space";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heading}>
          <Typography variant="title">AstroWatch</Typography>
        </View>
        <IssPositionCard />
        <SolarWeatherCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ffffff" },
  container: {
    flexGrow: 1,
    paddingVertical: 16,
    alignItems: "stretch",
  },
  heading: { alignItems: "center", marginBottom: 8 },
});
