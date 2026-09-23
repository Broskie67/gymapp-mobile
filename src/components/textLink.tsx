import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

type TextLinkProps = { href: Href; children: React.ReactNode };

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link href={href} style={styles.link}>
      {children}
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    color: Colors.link,
    fontSize: 14,
  },
});
