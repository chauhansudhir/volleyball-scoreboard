import { ITeamScore } from "@/types/Team";

export enum TEAM_NAMES {
  HOME = "home",
  AWAY = "away",
}

export const HOME_CONF = {
  teamId: TEAM_NAMES.HOME,
  title: "HOME",
  color: "red",
};

export const AWAY_CONF = {
  teamId: TEAM_NAMES.AWAY,
  title: "AWAY",
  color: "blue",
};

export const getDefaultScore = (): ITeamScore => ({
  home: 0,
  away: 0,
  streak: 0,
  current: TEAM_NAMES.HOME,
  datetime: Date.now(),
});
