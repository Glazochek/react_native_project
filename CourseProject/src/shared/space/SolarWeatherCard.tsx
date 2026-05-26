import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Card from "#design/elements/Card";
import Typography from "#design/elements/Typegraphy";
import { spacing } from "#design/foundations";

import { NASA_KEY } from "./constants";
import type { DonkiNote } from "./types";

export const SolarWeatherCard: React.FC = () => {
  const [note, setNote] = useState<DonkiNote>();

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `https://api.nasa.gov/DONKI/notifications?api_key=${NASA_KEY}`,
      );
      const data = (await res.json()) as {
        messageType: string;
        messageBody: string;
      }[];
      const latest = data[0];
      if (!latest) return;
      const body = latest.messageBody;
      setNote({
        messageType: latest.messageType,
        messageBody: body.length > 100 ? body.slice(0, 100) + "…" : body,
      });
    })();
  }, []);

  return (
    <Card>
      <View style={styles.main}>
        <Typography variant="title">Space weather</Typography>
        <Typography variant="label">{note?.messageType ?? "--"}</Typography>
        <Typography variant="muted">
          {note?.messageBody ?? "loading…"}
        </Typography>
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
