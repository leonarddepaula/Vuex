<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ListaEquipes />
            </div>
        </div>
    </div>
</template>

<script>
import ListaEquipes from '@/components/ListaEquipes'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Equipes',
    components: {
        ListaEquipes
    }
}
</script>