<template>
          <div class="column is-12-mobile is-4-desktop is-4-tablet"  v-bind:key="member.id">
        <div class="card">
          <div class="card-header">
            <img v-bind:src="member.avatar_url" alt="" />
          </div>
          <div class="card-content">
            <h3 class="title is-size-4">{{ member.login }}</h3>
            <button class="button is-success is-small">Ver mas</button>
          </div>
        </div>
      </div>
</template>

<script>
export default{
    props: ['member']
}
</script>