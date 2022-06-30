import type { User } from "./user"

export type VotingRange = Fibonacci | ShirtSize

export type Fibonacci = {
    type: 'fibonacci'
    name: 'Fibonacci'
    options: 0 | 1 | 2 | 3 | 5 | 8 | 11 | 19 | 30
}

export type ShirtSize = {
    type: 'shirtsize'
    name: 'T-Shirt Size'
    options: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
}

export type VotingResult = {
    range: VotingRange
    result: Record<string, any>
}

export type VotingRound = {
    id: string
    users: User[]
    title?: string
    result?: VotingResult
}
