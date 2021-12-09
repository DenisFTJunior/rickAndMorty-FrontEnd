export interface Character {
    readonly id: string,
    readonly name: string,
    readonly status: string,
    readonly gender: string,
    readonly image: string,
    readonly species: string,
    readonly [propName: string]: any
}

export interface Characters {
    characters: Character[]
}