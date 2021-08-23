export interface Repository {
    name: string;
    description: string;
    github_url: string;
    logo_url: string;
}

export interface Repositories<T> {
    res: Array<T>
}