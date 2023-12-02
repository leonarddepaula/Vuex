import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    titulo: "Emergências Médicas",
    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      carro: "",
      telefone: "",
      kitDeReanimacao: "",
    },
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: [],
    },
  },
  getters: {
    totalEnfermeiros(state) {
      return state.enfermeiros.length;
    },
    socorristasPorTurno(state) {
      //closure
      return (turno) =>
        !turno
          ? state.socorristas
          : state.socorristas.filter((s) => s.turno === turno);
    },
    totalSocorristas: (state) => state.socorristas.length,
    totalSocorristasPorTurno: (state, getters) => {
      //closure
      return (turno) => getters.socorristasPorTurno(turno).length;
    },
  },
  mutations: {
    setItemEquipe: (state, item) => {
      // setItemEquipe: (state, { item }) => {
      // console.log(payload);  pega todo objeto
      // let item = payload.item

      let t = item.tipo;
      let d = item.dados;

      if (t == "enfermeiros") state.equipe.enfermeiro = d.nome;
      if (t == "socorristas") state.equipe.socorrista = d.nome;
      if (t == "medicos") state.equipe.medico = d.nome;
      if (t == "carros") state.equipe.carro = d.placa;
      if (t == "telefones") state.equipe.telefone = d.telefone;
      if (t == "kits-de-reanimacao") state.equipe.kitDeReanimacao = d.kit;

      console.log(t);
      console.log(d);
    },
    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
      //console.log('mutation ',payload);
    },
    setSocorristas: (state, payload) => {
      state.socorristas = payload;
     
    },
    setMedicos: (state, payload) => {
      state.medicos = payload;
      
    },

    setCarros: (state, payload) => {
      state.equipamentos.carros = payload;
     
    },

    setTelefones: (state, { telefones }) => {
      state.equipamentos.telefones = telefones;
    },
    setKitsDeReanimacao: (state, { kitsDeReanimacao }) => {
      state.equipamentos.kitsDeReanimacao = kitsDeReanimacao;
    },
  },
  actions: {
    fetchEquipamentos(context, payload){
      console.log(payload);
      fetch('http://localhost:3000/equipamentos')
      .then(response => response.json())
      .then(dados => {
         context.commit('setCarros', dados.carros)
      // processamento assíncrono
      context.commit('setTelefones', dados.telefones)
     // processamento assincrono 
      // diversas regras de negócio 
      context.commit('setKitsDeReanimacao', dados.kitsDeReanimacao)
      })
      
    },
    fetchProficionais(context){
      fetch('http://localhost:3000/enfermeiros')
      .then(response => response.json())
      .then(dados => context.commit('setEnfermeiros',dados))

    fetch('http://localhost:3000/socorristas')
      .then(response => response.json())
      .then(dados => context.commit('setSocorristas',dados))

    fetch('http://localhost:3000/medicos')
      .then(response => response.json())
      .then(dados => context.commit('setMedicos', dados))
    }
  }
});
