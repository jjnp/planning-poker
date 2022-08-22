<script lang="ts">
import Card from "$components/poker/Card.svelte";

    let flop = false
    let flop2 = false
</script>

revealed
<Card value={5} state='revealed'></Card>
unanswered
<Card value={5} state='unanswered'></Card>
answered
<Card value={5} state='answered'></Card>
selected
<Card value={5} state='selected'></Card>
flip answered - revealed
<Card value={5} state={ (flop && 'answered') || 'revealed'} on:click={() => flop = !flop}></Card>
<br/><br/>
flip unanswered - answered
<Card value={5} state={ (flop2 && 'answered') || 'unanswered'} on:click={() => flop2 = !flop2}></Card>
