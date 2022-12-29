<template>
  <div class="hero is-white is-gradient is-bold">
    <div class="hero-body">
      <div class="field has-addons">
        <div class="control">
          <h3>Escriba el nombre de la Organización</h3>
          <input
            v-model="search"
            type="text"
            class="input is-rounded"
            v-on:keyup.enter="searchData"
          />
          <div class="">
            <button class="button is-success is-rounded mt-4" @click="searchData">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div
      class="columns is-desktop is-mobile is-tablet is-multiline is-centered"
    >
      <div
        class="column is-12-mobile is-4-desktop is-4-tablet"
        v-for="member of members"
        v-bind:key="member.id"
      >
        <div class="card">
          <div class="card-header">
            <img v-bind:src="member.avatar_url" alt="" />
          </div>
          <div class="card-content">
            <h3 class="title is-size-4">{{ member.login }}</h3>
            <button class="button is-success is-small" @click="showMore(member.login)">Ver mas</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" 
    :class="{'is-active': modal }"
    v-if="modal">
      <div class="modal-background" @click="modal = false">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">
              Acerca de:  {{ currentMember.name }}
              <img v-bind:src="currentMember.avatar_url" alt="" />
            </p>
          </header>
          <div class="modal-card-body">
          <p>Organización: {{ currentMember.company }}</p>
          <p>Biografía: {{ currentMember.bio }}</p>
          <p>Email: {{ currentMember.email }}</p>
          <p>URL: {{ currentMember.html_url }}</p>
          </div>
          <footer class="modal-card-foot">
            <button class="button" @click="modal = false">Cerrar</button>

          </footer>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data: function () {
    return {
      members: [],
      search: "",
      modal: false,
      currentMember: {

      }
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.search == "") {
        var params = "Lemoncode";
      } else {
        var params = this.search;
      }

      let result = axios
        .get(`https://api.github.com/orgs/${params}/members`)
        .then((res) => {
          this.members = res.data;
          
        })
        .catch((err) => {
          alert('La organización no exsite');
          console.log(err);
        });
    },
    searchData() {
      this.fetch();
    },
    showMore (id) {
      this.fetchOne(id)
    },
    async fetchOne(id){
      let result = await axios.get(`https://api.github.com/users/${id}`);
      this.currentMember = result.data;
      this.modal = true;


    }
  },
};
</script>
