import { create } from "zustand";

import { ITeamScore } from "@/types/Team";
import { getDefaultScore, TEAM_NAMES } from "@/constants/Common";

const useScore = create<ITeamScore>(() => getDefaultScore());

export const onScoreChange = (team: string, point: number) =>
  useScore.setState((prev): ITeamScore => {
    const prevScore = team === TEAM_NAMES.HOME ? prev.home : prev.away;
    let totalPoints = prevScore + point;
    if (totalPoints < 0) totalPoints = 0;

    if (team === TEAM_NAMES.HOME) {
      prev.home = totalPoints;
    } else {
      prev.away = totalPoints;
    }
    const streak = prev.current === team ? prev.streak + point : 1;

    return {
      ...prev,
      current: team,
      streak: streak < 0 ? 0 : streak,
    };
  });

export const resetScore = () => useScore.setState(() => getDefaultScore());

export default useScore;
