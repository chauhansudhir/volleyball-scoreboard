export type TeamName = TEAM_NAMES.HOME | TEAM_NAMES.AWAY;

export interface ITeamScore {
  home: number;
  away: number;
  current: TeamName;
  datetime: number;
  streak: number;
}

export interface IUseManageScore {
  score: ITeamScore;
  onScoreChange: (team: TeamName, point: number) => void;
  onScoreReset: () => void;
}

export interface ITeamConf {
  teamId: TEAM_NAMES.HOME;
  title: string;
  color: string;
}

interface IScoreButton {
  point: number;
  children: ReactNode | Array<ReactNode>;
  onClick: (point: number) => void;
  disabled?: boolean;
}
