<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="modern-header" height-hint="70">
      <q-toolbar class="q-px-lg">
        <q-toolbar-title class="header-title">
          <q-icon name="flight" size="2rem" class="q-mr-sm" />
          <span class="brand-text">SkyWings</span>
        </q-toolbar-title>
        
        <q-space />
        
        <div class="header-actions">
          <q-btn 
            flat 
            no-caps 
            label="My Trips" 
            class="header-btn q-mr-sm"
            icon="luggage"
          />
          <q-btn 
            flat 
            no-caps 
            label="Sign In" 
            class="header-btn"
            icon="person"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'SimpleLayout'
}
</script>

<style lang="scss" scoped>
.modern-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  color: #333;
}

.header-title {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
}

.brand-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-btn {
  color: #666;
  font-weight: 500;
  border-radius: 8px;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  
  @media (max-width: 600px) {
    .header-btn span {
      display: none;
    }
  }
}
</style>