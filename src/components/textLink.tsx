import {TextStyle, StyleProp} from "react-native"
import { Href, Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

type TextLinkProps = { 
  href: Href; 
  children: React.ReactNode; 
  style?: StyleProp<TextStyle>;
};

export function TextLink({ href, children, style }: TextLinkProps) {
  return (
    <Link href={href} style={[styles.link, style]}>
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
