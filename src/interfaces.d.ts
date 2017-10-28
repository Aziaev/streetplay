interface AppProps {
    apptitle: string;
    val: number;
}

interface AppState {
    txt: string;
    val: number;
    characters: Character[];
    next: boolean;
    videoURL: string;
}

interface User {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface MyCloneProps {
    users: User[];
}

interface MyCloneState {
    users: User[];
}

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
    onClickMethod(event: {}): void;
}