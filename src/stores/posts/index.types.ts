interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IUser {
    id: number,
    name: string,
    username: string
}

interface IState {
    posts: IPost[],
    users: IUser[]
}
