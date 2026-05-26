import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Card from "#design/elements/Card";
import Typography from "#design/elements/Typegraphy";
import { spacing } from "#design/foundations";

import type { PersonInSpace } from "./types";

export const CrewScroll: React.FC = () => {
  const [people, setPeople] = useState<PersonInSpace[]>([]);

  useEffect(() => {
    void (async () => {
      const res = await fetch("http://api.open-notify.org/astros.json");
      const data = (await res.json()) as { people: PersonInSpace[] };
      setPeople(data.people);
    })();
  }, []);

  return (
    <Card>
      <ScrollView horizontal style={styles.row}>
        {people.map((p) => (
          <View key={p.name} style={styles.item}>
            <Typography
              href={`/crew/${encodeURIComponent(p.name)}?craft=${encodeURIComponent(p.craft)}`}
              variant="large"
            >
              {p.name}
            </Typography>
            <Typography variant="label">{p.craft}</Typography>
          </View>
        ))}
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: { flexGrow: 0, flexDirection: "row" },
  item: {
    alignItems: "center",
    marginHorizontal: spacing.between,
    minWidth: 120,
  },
});
