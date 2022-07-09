import type { User } from "./user"
import type { ActiveRound, FinishedRound, PastRound, VotingRange } from "./voting"

declare const roomId: unique symbol

export type RoomId = string & { readonly [roomId]: never }

export type RoomSettings = {
    name: string
    range: VotingRange
}

export type RoomState = {
    id: RoomId
    currentRound: ActiveRound | FinishedRound
    activeUsers: User[]
    pastRounds: PastRound[]
    settings: RoomSettings
}