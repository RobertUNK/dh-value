export interface CardInterface {
  titleContainer: string;
  title: string;
  subtitle: string;
  iconName: string;
  number: number;
  disabled: boolean;
  color: CardColorEnum;
}

export enum CardColorEnum {
  BLUE = 'blue',
  GREEN = 'green',
  SUNSET = 'sunset',
  RED = 'red',
  ORANGE_SYS = 'orange-sys',
}
