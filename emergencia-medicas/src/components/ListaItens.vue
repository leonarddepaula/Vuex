<template>
    <div v-if="tipo == 'socorristas'">
        <select class="form-select form-select-sm mt-1 mb-2" v-model="turno">
            <option value="">Todos</option>
            <option value="manhã">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
        </select>
    </div>
    <div>
        <item v-for="(item, indice) in itens" :key="indice" :dados="item" :tipo="tipo" />
        <div class="mt-1" v-if="tipo == 'socorristas'">
            Total: {{ totalSocorristasPorTurno(turno) }}
        </div>
    </div>
</template>

<script>
import Item from '@/components/Item.vue'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'ListaItens',
    components: {
        Item
    },
    data: () => ({
        turno: ''
    }),
    props: {
        tipo: String
    },
    computed: {
        ...mapState({ // pega o conteudo de casa objeto em store.js
            enfermeiros: state => state.enfermeiros,
            // socorristas: state => state.socorristas,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
        }),
        /* ...mapGetters({
            socorristasPorTurno: 'socorristasPorTurno',
            totalSocorristasPorTurno: 'totalSocorristasPorTurno'
        }), */
        ...mapGetters(['socorristasPorTurno', 'totalSocorristasPorTurno']),
        itens() { // controla atraves da prop qual lista de ojetos mostrar
            switch (this.tipo) {
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.socorristasPorTurno(this.turno)
                case 'medicos': return this.medicos
                case 'carros': return this.carros
                case 'telefones': return this.telefones
                case 'kits-de-reanimacao': return this.kitsDeReanimacao
            }
            return []
        }
    }
}
</script>