<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
                <span>Total de enfermeiros: {{ $store.getters.totalEnfermeiros }}</span>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ListaItens tipo="equipes-montadas" />
            </div>
        </div>
    </div>
</template>

<script>
import ListaItens from '@/components/ListaItens'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Equipes',
    components: {
        ListaItens
    }
}
</script>