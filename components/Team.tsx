import { Pressable, StyleSheet, View, type ViewProps } from 'react-native';
import { ThemedText } from './ThemedText';
import { ITeamConf } from '@/types/Team';
import useScore, { onScoreChange } from '@/data/score';
import ScoreButton from './ScoreButton';
import { TEAM_NAMES } from '@/constants/Common';
import { COLOR_BLACK, COLOR_WHITE } from '@/constants/Colors';

export function Team({ color, teamId, title }: ITeamConf) {
    const { point, current, streak } = useScore((state) => ({
        point: teamId === TEAM_NAMES.HOME ? state.home : state.away,
        current: state.current,
        streak: state.streak
    }));

    const isCurrentTeam = current === teamId

    const handleClick = (point: number) => {
        onScoreChange(teamId, point);
    }

    return (
        <View style={StyleSheet.flatten([styles.container, { backgroundColor: color }])}>
            <ThemedText style={styles.title}>{title}</ThemedText>
            <ThemedText style={StyleSheet.flatten([styles.score, {
                color: isCurrentTeam ? COLOR_WHITE : COLOR_BLACK
            }])} type="title">{point}</ThemedText>
            <View style={styles.buttonBox}>
                <ScoreButton point={-1} onClick={handleClick}>-</ScoreButton>
                <ScoreButton point={1} onClick={handleClick}>+</ScoreButton>
            </View>
            <ThemedText style={styles.title}>{isCurrentTeam ? `Streak: ${streak}` : ''}</ThemedText>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { lineHeight: 50, color: '#ffffff' },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBox: { flexDirection: 'row', justifyContent: 'center', gap: 10 },
    buttons: {
        fontSize: 35, lineHeight: 37
    },
    score: {
        textAlign: 'center', fontSize: 215, lineHeight: 215
    },
});
