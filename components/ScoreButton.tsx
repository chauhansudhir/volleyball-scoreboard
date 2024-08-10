import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { IScoreButton } from "@/types/Team";


const ScoreButton = (props: IScoreButton) => {
    const { point, children, onClick, disabled } = props;

    const handleClick = () => {
        if (!disabled) onClick(point);
    }

    return (
        <Pressable onPress={handleClick}>
            <ThemedText style={styles.buttons}>{children}</ThemedText>
        </Pressable>
    )
}

export default ScoreButton;

const styles = StyleSheet.create({

    buttons: {
        fontSize: 40, lineHeight: 37, color: '#ffffff'
    },

});
