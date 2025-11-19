<template>
  <q-page class="search-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Find Your Perfect Flight</h1>
        <p class="hero-subtitle">Discover amazing destinations at unbeatable prices</p>
      </div>
    </div>

    <!-- Search Form -->
    <div class="search-container">
      <q-card class="search-card" flat bordered>
        <q-card-section class="q-pa-xl">
          <div class="text-h5 text-center q-mb-lg text-primary">Search Flights</div>
          
          <q-form @submit="onSubmit" class="search-form">
            <div class="row q-gutter-md">
              <!-- From Input -->
              <div class="col-12 col-md-5">
                <q-input
                  v-model="departure"
                  label="From"
                  outlined
                  class="modern-input"
                  :rules="[val => val && val.length > 0 || 'Please enter departure city']"
                >
                  <template v-slot:prepend>
                    <q-icon name="flight_takeoff" color="primary" />
                  </template>
                </q-input>
              </div>

              <!-- Swap Button -->
              <div class="col-12 col-md-2 flex flex-center">
                <q-btn 
                  round 
                  color="primary" 
                  icon="swap_horiz" 
                  @click="swapCities"
                  class="swap-btn"
                  size="md"
                />
              </div>

              <!-- To Input -->
              <div class="col-12 col-md-5">
                <q-input
                  v-model="arrival"
                  label="To"
                  outlined
                  class="modern-input"
                  :rules="[val => val && val.length > 0 || 'Please enter arrival city']"
                >
                  <template v-slot:prepend>
                    <q-icon name="flight_land" color="primary" />
                  </template>
                </q-input>
              </div>
            </div>

            <div class="row q-gutter-md q-mt-md">
              <!-- Date Input -->
              <div class="col-12 col-md-6">
                <q-input
                  v-model="date"
                  label="Departure Date"
                  type="date"
                  outlined
                  class="modern-input"
                  :rules="[val => val && val.length > 0 || 'Please select date']"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" color="primary" />
                  </template>
                </q-input>
              </div>

              <!-- Passengers -->
              <div class="col-12 col-md-6">
                <q-select
                  v-model="passengers"
                  :options="passengerOptions"
                  label="Passengers"
                  outlined
                  class="modern-input"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" color="primary" />
                  </template>
                </q-select>
              </div>
            </div>

            <!-- Search Button -->
            <div class="text-center q-mt-xl">
              <q-btn 
                label="Search Flights" 
                type="submit" 
                color="primary"
                size="lg"
                class="search-btn"
                icon="search"
                no-caps
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="container">
        <div class="row q-gutter-lg justify-center">
          <div class="col-12 col-md-3">
            <q-card class="feature-card" flat>
              <q-card-section class="text-center">
                <q-icon name="schedule" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">24/7 Support</div>
                <div class="text-grey-7">Round-the-clock customer assistance</div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-12 col-md-3">
            <q-card class="feature-card" flat>
              <q-card-section class="text-center">
                <q-icon name="security" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">Secure Booking</div>
                <div class="text-grey-7">Your data is safe and protected</div>
              </q-card-section>
            </q-card>
          </div>
          
          <div class="col-12 col-md-3">
            <q-card class="feature-card" flat>
              <q-card-section class="text-center">
                <q-icon name="local_offer" size="3rem" color="primary" class="q-mb-md" />
                <div class="text-h6 q-mb-sm">Best Prices</div>
                <div class="text-grey-7">Guaranteed lowest fares available</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SimpleSearch',
  data() {
    return {
      departure: '',
      arrival: '',
      date: '',
      passengers: '1 Adult',
      passengerOptions: [
        '1 Adult',
        '2 Adults', 
        '3 Adults',
        '4 Adults',
        '1 Adult, 1 Child',
        '2 Adults, 1 Child',
        '2 Adults, 2 Children'
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('Search:', this.departure, this.arrival, this.date, this.passengers)
      this.$q.notify({
        type: 'positive',
        message: 'Searching for flights...',
        position: 'top'
      })
    },
    swapCities() {
      const temp = this.departure
      this.departure = this.arrival
      this.arrival = temp
    }
  }
}
</script>

<style lang="scss" scoped>
.search-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-section {
  padding: 4rem 2rem;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 0;
}

.search-container {
  max-width: 900px;
  margin: -2rem auto 0;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.search-card {
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.95);
}

.modern-input {
  .q-field__control {
    border-radius: 12px;
    height: 56px;
  }
  
  .q-field__native {
    font-size: 1.1rem;
  }
}

.swap-btn {
  margin-top: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
}

.search-btn {
  padding: 12px 48px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.2);
  }
}

.features-section {
  padding: 4rem 2rem;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem 1rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  }
}

.search-form {
  .row {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .search-container {
    margin-top: -1rem;
    padding: 0 1rem;
  }
  
  .search-card {
    .q-card-section {
      padding: 2rem 1.5rem;
    }
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .features-section {
    padding: 2rem 1rem;
  }
}
</style>