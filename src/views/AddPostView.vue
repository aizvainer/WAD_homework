<template>
    <HeaderComponent />
    <div class="mainBlock">
        <form class="post" v-if="isAuthenticated">
            <div>Add post</div>
            <textarea
                id="text"
                rows="10"
                required
                v-model="post.text"
            ></textarea>
            <div class="buttons">
                <button type="submit" v-on:click="addPost()">Add</button>
            </div>
        </form>
        <div v-else>
            <p> Please log in to add a post. </p>
        </div>
    </div>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "PostView",
    components: {
        HeaderComponent,
        FooterComponent,
    },
    data() {
        return {
            post: {
                timestamp: 0,
                author: "",
                text: "",
            },
        };
    },
    computed: {
        //...mapState(["isAuthenticated]),
    },
    methods: {
        addPost() {
            this.post.timestamp = Math.trunc(Date.now() / 1000)
            fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
                .then((response) => {
                    console.log(response.data);
                    this.$router.push("/");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
};
</script>
<style>
.mainBlock {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
}
.post {
    margin: 20px auto;
    padding: 10px;
    background-color: #99ee99;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.post > * {
    margin-bottom: 20px;
}
.buttons > button:last-child {
    margin-left: 20px;
}
textarea {
    resize: none;
    width: 100%;
}
</style>
