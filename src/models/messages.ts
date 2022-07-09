import type { RoomSettings, RoomState } from './settings'
import type { User } from './user'
import type { VotingRange } from './voting'

export type ClientMessage = Join | Leave | FetchState | Vote | RevealRequest | NextRound | ChangeRoomSettings | ClearHistory

export type ServerMessage = SendState

export type Join = {
    type: 'join'
    room: string
    user: User
}

export type Leave = {
    type: 'leave'
    room: string
    user: User
}

export type FetchState = {
    type: 'fetch'
}

export type Vote = {
    type: 'vote'
    selection: VotingRange['options']
}

export type RevealRequest = {
    type: 'reveal'
}

export type NextRound = {
    type: 'next-round'
    roundTitle: string
}

export type ChangeRoomSettings = {
    type: 'change-settings'
    settings: RoomSettings
}

export type ClearHistory = {
    type: 'clear-history'
}

export type SendState = {
    type: 'state'
    state: RoomState
}