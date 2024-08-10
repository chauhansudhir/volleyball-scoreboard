import { StyleSheet, View, Button } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { ThemedView } from '@/components/ThemedView';
import { Team } from '@/components/Team';
import { AWAY_CONF, HOME_CONF } from '@/constants/Common';
import { resetScore } from '@/data/score'


export default function HomeScreen() {
  const orientation = useDeviceOrientation();
  const isPortrait = orientation === 'portrait';

  return (
    <ThemedView style={{
      height: '100%',
      width: '100%',
    }}>
      <View style={{
        height: '100%',
        width: '100%',
        flexDirection: isPortrait ? 'column' : 'row',
      }}>
        <ThemedView style={{ flex: 1 }}>
          <Team {...HOME_CONF} />
        </ThemedView>
        <ThemedView style={{ flex: 1 }}>
          <Team {...AWAY_CONF} />
        </ThemedView>
      </View>
      <View style={styles.floatingButtons}>
        <Button onPress={resetScore} title='reset' />
      </View>
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  teamsContainer: {
    height: '100%',
    width: '100%'
  },
  floatingButtons: {
    position: 'absolute',
    backgroundColor: '#e2e2e2',
    right: 0,
    bottom: 0
  }
});
