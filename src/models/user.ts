declare const userId: unique symbol

export type UserId = string & { readonly [userId]: never }

export type User = {
    id: UserId
    username: string
    observer?: boolean
}