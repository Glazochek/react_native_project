import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Card from "#design/elements/Card";
import Typography from "#design/elements/Typegraphy";
import { spacing } from "#design/foundations";

import type { IssPosition } from "./types";

export const IssPositionCard: React.FC = () => {
  const [pos, setPos] = useState<IssPosition>();

  useEffect(() => {
    void (async () => {
      const res = await fetch("http://api.open-notify.org/iss-now.json");
      const data = (await res.json()) as {
        iss_position: { latitude: string; longitude: string };
      };
      setPos({
        latitude: data.iss_position.latitude,
        longitude: data.iss_position.longitude,
      });
    })();
  }, []);

  return (
    <Card>
      <View style={styles.main}>
        <Typography variant="title">ISS position</Typography>
        <Typography variant="muted">lat {pos?.latitude ?? "--"}</Typography>
        <Typography variant="muted">lng {pos?.longitude ?? "--"}</Typography>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    gap: spacing.between,
  },
});
