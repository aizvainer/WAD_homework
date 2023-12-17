<template>
    <div>
        <HeaderComponent />
            <div class="container">
                <div class="loginContainer">
                    <h2>Login or</h2>
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

                        <div class="buttonContainer">
                            <button type="submit" class="loginButton">Login</button>
                            <router-link to="/signup">
                                <button type="submit" class="signUpButton">Sign Up</button>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'LoginView',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

         if (response.ok) {
        const data = await response.json();
        
        if (data.loginSuccess) {
          localStorage.setItem('token', data.token);
          
          this.$router.push('/main');
        } else {
          console.error('Login unsuccessful');
        }
      } else {
        console.error('Error during login');
      }
    } catch (error) {
      console.error('Request error', error);
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

.loginContainer {
    height: 400px;
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

.buttonContainer {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}


.signUpButton {
  padding: 10px;
  width: 100px;
  height: 35px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.loginButton {
  padding: 10px;
  width: 100px;
  height: 35px;
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