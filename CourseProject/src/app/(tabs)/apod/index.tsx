import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Typography from "#design/elements/Typegraphy";
import { NASA_KEY, type ApodData } from "#shared/space";

const App: React.FC = () => {
  const [data, setData] = useState<ApodData>();

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`,
      );
      setData((await res.json()) as ApodData);
    })();
  }, []);

  if (!data) {
    return (
      <SafeAreaView style={styles.safe}>
        <ActivityIndicator size="large" style={styles.load} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Typography variant="title">{data.title}</Typography>
        <Image
          source={{ uri: data.url }}
          style={styles.img}
          resizeMode="cover"
        />
        <View style={styles.body}>
          <Typography variant="muted">{data.explanation}</Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  load: { flex: 1 },
  container: { padding: 16, paddingBottom: 32 },
  img: {
    width: "100%",
    height: 220,
    borderRadius: 8,
    marginVertical: 12,
    backgroundColor: "#eee",
  },
  body: { marginTop: 8 },
});
