<template>
     <header>
            <div>
                <div>
                    <router-link to="/">Home</router-link>
                    <span> | </span>
                    <router-link to="/contactus">Contact us</router-link>
                </div>
                <div class="userContainer">
                    <a href="#" class="userLink"></a>
                </div>
            </div>
        </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style>
header {
 background-color: #bbb;
 border-radius: 20px;
}

header > div {
 max-width: 1200px;
 margin: 0 auto;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 10px 20px;
 background-color: #bbb;
 font-size: 32px;
}

header > div > div a + span {
color: #555;
}

header a {
color: #000;
transition: color .5s;
}

header a:hover {
color: #0013de;
}

.userContainer {
  display: flex;
  align-items: center;
  position: relative;
}

.userLink {
 display: block;
 width: 48px;
 height: 48px;
 background-size: 48px;
 background-image: url(../assets/user.png);
 font-weight: bold;
 margin-top: 5px; /* Add margin to push the author's name down to avoid overlap */ 
}
</style>