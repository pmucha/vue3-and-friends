<template>
  <nav>
    <div>
      <img src="@/assets/vue.svg" />
    </div>
    <div>
      <router-link to="/">Go Home</router-link>
    </div>
    <div>
      <router-link to="/about">Go to About</router-link>
    </div>
    <div>
      <router-link to="/123">Go to 404</router-link>
    </div>
  </nav>
  <div class="main">
    <aside>
      <router-view name="sidebar" />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
nav, .main {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

aside {
  flex-basis: 15%;
  min-width: 200px;
}

main {
  flex-grow: 1;
}
</style>
