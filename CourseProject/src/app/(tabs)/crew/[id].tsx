import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "#design/elements/Typegraphy";

const App: React.FC = () => {
  const { id, craft } = useLocalSearchParams<{ id: string; craft?: string }>();
  const name = id ? decodeURIComponent(id) : "--";

  return (
    <>
      <Stack.Screen options={{ title: name }} />

      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Typography variant="title">{name}</Typography>
          <Typography variant="label">craft</Typography>
          <Typography variant="large">{craft ?? "--"}</Typography>
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
  },
});
