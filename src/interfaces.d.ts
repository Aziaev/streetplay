interface MyDropdownProps {
  isOpenedProp: boolean;
  defaultName: string;
}

interface MyDropdownState {
  isOpened: boolean;
  name: string;
}

interface MyCardProps {
  user: User;
}

interface MyCardState {
  user: User;
}

interface Character {
  name: string;
  mass: number;
  height: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  next: string;
}

interface MyWrapperProps {
  drawerOpened: boolean;
  logged: boolean;
}

interface MyWrapperState {
  drawerOpened: boolean;
  showMainDescription: boolean;
  title: string;
  description: string;
  logged: boolean;
  videoURL: string;
}

interface UserCardProps {
  character: Character;
}

interface LoggedProps {
}

interface IconButtonExpandMoreProps {
  active: boolean;

  onClickMethod( event: {} ): void;
}