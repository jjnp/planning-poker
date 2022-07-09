import type { User, UserId } from "./user"

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
    result: Record<UserId, VotingRange['options']>
}

declare const roundId: unique symbol

export type RoundId = string & { readonly [roundId]: never }

export type VotingRound = {
    id: RoundId
    users: User[]
    title: string
    result: VotingResult
}

export type ActiveRound = VotingRound & {
    type: 'active'
}

export type FinishedRound = VotingRound & {
    type: 'finished'
}

export type PastRound = VotingRound & {
    type: 'past'
}

export type RoundState = ActiveRound | FinishedRound | PastRound
