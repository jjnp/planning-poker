<script lang="ts">
import type { VotingRange } from "$models/voting";


    export let state: 'unanswered' | 'answered' | 'revealed' | 'selected' = 'unanswered'
    export let value: VotingRange['options'] | undefined = undefined
</script>

<div class="card card--{state}" on:click>
    <p class="card__value" class:card__value--visible={state === 'revealed' || state === 'selected' }>{value}</p>
</div>

<style lang="scss">
    .card {
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 5px;
        aspect-ratio: 0.71;
        width: 50px;
        border: 2px solid purple;
        color: purple;
        transition: transform .25s ease-in;
        transform-style: preserve-3d;

        &--answered {
            background-color: purple;
            opacity: .75;
            transform: rotateY(180deg);
        }

        &--unanswered {
            
        }

        &--revealed {
            
        }

        &--selected {
            color: white;
            background-color: purple;
            opacity: .75;
        }

        &__value {
            font-size: 2rem;
            visibility: hidden;

            &--visible {
                visibility: visible;
            }
        }
    }
</style>