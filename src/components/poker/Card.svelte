<script lang="ts">
import type { VotingRange } from "$models/voting";


    export let state: 'unanswered' | 'answered' | 'revealed' | 'selected' = 'unanswered'
    export let value: VotingRange['options'] | undefined = undefined
</script>

<div class="card card--{state}" on:click>
    <p class="card__value" class:card__value--hidden={state === 'unanswered' || state === 'answered' }>{value}</p>
    <div class="card__back"></div>
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
        transition: background-color .45 ease-in;
        transform-style: preserve-3d;
        display: grid;
        align-items: center;
        justify-items: center;

        &--answered {
            transform: rotateY(180deg);
        }

        &--revealed {
            color: purple;
        }

        &--selected {
            color: white;
            background-color: purple;
        }

        &__value {
            font-size: 2rem;
            margin: 0;

            &--hidden {
                visibility: hidden;
            }
        }

        &__value, &__back {
            backface-visibility: hidden;
            grid-area: 1/1/1/1;
        }

        &__back {
            transform: rotateY(180deg);
            height: 100%;
            width: 100%;
            background-color: purple;
        }
    }
</style>