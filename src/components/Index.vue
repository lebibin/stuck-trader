<template>
  <div class="container">
    <div class="row">
      <h1>Trade or View your Porfolio</h1>
      <ul>
        <li v-for="note in notes" v-html="note">
        </li>
      </ul>
      <hr>
      <p class='funds'>
        Your Funds: ${{ funds  }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        'You may <em>save</em> or <em>load</em> your data.',
        'Click on <strong>End Day</strong> to begin a new day!'
      ]
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px 50px 25px 50px;
}
.funds {
  font-size: 19px;
  font-weight: bold;
}
</style>
