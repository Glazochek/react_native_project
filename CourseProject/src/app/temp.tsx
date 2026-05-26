import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "#design/elements/Typegraphy";

const App: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: "About" }} />

      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Typography variant="title">AstroWatch</Typography>
          <Typography variant="muted">
            Space dashboard: ISS position, DONKI alerts, crew in orbit, NASA
            APOD.
          </Typography>
          <Typography href="/">Back to Dashboard</Typography>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
