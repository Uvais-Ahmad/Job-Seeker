import { View, Text } from "react-native";

import styles from "./about.style";

interface AboutProps {
  info: string;
}

const About : React.FC<AboutProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
