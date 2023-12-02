<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(equipe, indice) in equipes" :key="indice">
                <equipe :dados="equipe" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Equipe from '@/components/Equipe'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ListaEquipes',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Equipe
    },
    computed: {
        ...mapState(['equipes'])
    }
}
</script>