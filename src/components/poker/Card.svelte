<script lang="ts">
import type { VotingRange } from "$models/voting";


    export let state: 'blank' | 'answered' | 'revealed' = 'blank'
    export let value: VotingRange['options'] | undefined = undefined
</script>

<div class="card" class:card--answered={value} class:card--revealed={state === 'revealed'}>
    <p class="card__value" clsas:card__value--visible={state === 'revealed'}>{value}</p>
</div>

<style lang="scss">
    .card {
        &--answered {

        }

        &--revealed {

        }

        &__value {

            &--visible {
                
            }
        }
    }
</style>