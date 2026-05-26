import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "#design/elements/Typegraphy";
import { CrewScroll } from "#shared/space";

const App: React.FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Crew" }} />

      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Typography variant="title">In space now</Typography>
          <View style={styles.hint}>
            <Typography variant="muted">tap a name for details</Typography>
          </View>
          <CrewScroll />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, paddingTop: 8 },
  hint: { alignItems: "center", marginBottom: 8 },
});
