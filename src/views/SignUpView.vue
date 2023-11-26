<template>
    <div>
        <HeaderComponent />
            <div class="container">
                <div class="signUpContainer">
                  <h2>Create an account</h2>
                    <form @submit.prevent="submitForm" class="userForm">
                        
                        <div class="formGroup">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" placeholder="Email" required />
                        </div>

                         <div class="formGroup">
                            <label for="password">Password</label>
                            <input type="password" id="password" v-model="password" placeholder="Password" required/>
                            
                        </div>

                        <div v-if="!isPasswordValid" class="passwordValidation">
                            Password is not valid.
                        </div>

                        <button type="submit" class="signUpButton">Sign Up</button>
                    </form>
                </div>
            </div>
            <PasswordConditionsModal ref="conditionsModal" />
        </div>
        <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import PasswordConditionsModal from '@/components/PasswordConditionsModal.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: 'SignUpView',
    components: {
    HeaderComponent,
    PasswordConditionsModal,
    FooterComponent
  },

data() {
    return {
      email: "",
      password: "",
      isPasswordValid: true,
    };
  },

  methods: {
    validatePassword() {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z][A-Za-z\d_]{7,14}$/;
      this.isPasswordValid = passwordRegex.test(this.password);
    },

    submitForm() {
      this.validatePassword();
      if (!this.isPasswordValid) {
        this.$refs.conditionsModal.openModal();
        return;
      }
  
    },
  },
};

</script>

<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.signUpContainer {
    height: 350px;
    width: 500px;
    background-color: #ffffff; 
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.userForm {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 30px;
  margin-top: 10px;
  margin-right: 75px;

}

.formGroup {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  margin-right: 20px;
}

input {
  text-align: center;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 10px;
  background-color: #f9f9fa;
  border: 1px solid #ccc;
}

.passwordValidation {
  color: red;
  font-size: 15px;
  margin-bottom: 10px;
  margin-right: 40px;
}

.signUpButton {
  padding: 10px;
  width: 100px;
  height: 35px;
  margin-right: 70px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

button:hover{
  background-color: #0056b3;
}

</style>