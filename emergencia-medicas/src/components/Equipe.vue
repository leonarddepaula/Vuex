<template>
    <div  class="row">
       <span class="col-2 mb-2 fw-bold">Entermeiro:</span> <div class="col-2" v-text="dados.enfermeiro"></div>
       <span class="col-2 mb-2 fw-bold">Socorrista:</span>  <div class="col-2" v-text="dados.socorrista"></div>
       <span class="col-2 mb-2 fw-bold">Médico:</span> <div class="col-2" v-text="dados.medico"></div>
       <span class="col-2 mb-2 fw-bold">Carro:</span>  <div class="col-2" v-text="dados.carro"></div>
       <span class="col-2 mb-2 fw-bold">Telefone:</span>  <div class="col-2" v-text="dados.telefone"></div>
       <span class="col-2 mb-2 fw-bold"> kit-De-Reanimação</span><div class="col-2" v-text="dados.kitDeReanimacao"></div>
       
    </div>
</template>
<!-- primeira fase do projeto concluido -->
<script>


export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Equipe',
    props: {
        dados: Object
    }
    
}
</script>