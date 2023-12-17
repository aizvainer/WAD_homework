<template>
  <div>
    <HeaderComponent />
        <div class="container">
        <h2>Contact Us</h2>
      
      <form @submit.prevent="submitForm" class="contactForm">
        <div class="formGroup">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your name" required />
        </div>

        <div class="formGroup">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Your email" required />
        </div>

        <div class="formGroup">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" placeholder="Your message" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: 'ContactUs',
    components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: #fff;
}

h2 {
  margin-bottom: 20px;
}

.contactForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.formGroup {
  margin-bottom: 15px;
  text-align: left;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>