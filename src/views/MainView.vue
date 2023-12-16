<template>
    <HeaderComponent />
    <div class="mainBlock">
        <div class="sideBlock"></div>
        <div id="dynamicPostsContainer">
            <article
                v-for="post in this.posts"
                :key="post.id"
                v-on:click="$router.push('/post/' + post.id)"
            >
                <div class="articleInfo">
                    <div class="user">
                        <a href="#" class="userLink postLink"></a>
                        <div>{{ post.author }}</div>
                    </div>
                    <div>
                        {{
                            new Date(post.timestamp * 1000).toLocaleDateString()
                        }}
                    </div>
                </div>
                <div class="articleBody">
                    <img
                        v-if="post.image !== null"
                        :src="require('@/assets/' + post.image)"
                    />
                    {{ post.text }}
                </div>
                <div>
                    <div class="likeBtn"></div>
                </div>
            </article>
            <div class="buttons-main">
                <button id="add-button" v-on:click="$router.push('/addPost')">Add Post</button>
                <button id="delete-button" v-on:click="this.deletePosts()">
                    Delete all posts
                </button>
            </div>
        </div>
        <div class="sideBlock"></div>
    </div>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import router from "@/router";

export default {
    name: "MainView",
    components: {
        HeaderComponent,
        FooterComponent,
        router,
    },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        fetchPosts() {
            fetch("http://localhost:3000/posts")
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message))
        },
        deletePosts() {
            fetch("http://localhost:3000/posts", {
                method: "DELETE",
            })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((e) => {
                    console.log(e)
                })
            location.reload()
        },
    },
    mounted() {
        this.fetchPosts();
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

.sideBlock {
    min-width: 100px;
    min-height: 100px;
    margin: 10px;
    background-color: #bbb;
    border-radius: 20px;
    flex-grow: 1;
}

.user {
    display: flex;
    align-items: center;
}
.user > a {
    margin-right: 20px;
}

.postLink {
    width: 32px;
    height: 32px;
    background-size: 32px;
}

.mainBlock {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
}

.sideBlock {
    min-width: 100px;
    min-height: 100px;
    margin: 10px;
    background-color: #bbb;
    border-radius: 20px;
    flex-grow: 1;
}

article {
    cursor: pointer;
}

.articleContainer {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    margin: 0 20px;
}

.articleContainer article {
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    border-radius: 20px;
}

.articleContainer article > * {
    margin-bottom: 10px;
}

.articleInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.articleContainer article > *:last-child {
    margin: 0;
}

#dynamicPostsContainer {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    margin: 0 20px;
}

#dynamicPostsContainer article {
    margin: 10px 0;
    padding: 10px;
    background-color: #eee;
    border-radius: 20px;
}

#dynamicPostsContainer article > * {
    margin-bottom: 10px;
}

#dynamicPostsContainer article > *:last-child {
    margin: 0;
}

.articleBody img {
    width: 100%;
}

.articleInfo > a ~ * {
    font-size: 22px;
}

.likeBtn {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background-image: url(@/assets/thumb-up.png);
    margin-top: 10px;
    margin-bottom: 5px;
}

.likeBtn:active {
    transform: scale(0.75);
}

.buttons-main > button {
    width: 200px;
    padding: 10px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    border-radius: 20px;
    border: none;
    background-color: bisque;
    font-size: 20px;
    cursor: pointer;
}

#add-button {
    left: 30%;
}
#delete-button {
    right: 30%;
}

@media (max-width: 1400px) {
    #add-button {
        left: 10%;
    }
    #delete-button {
        right: 10%;
    }
}

@media (max-width: 800px) {
    .sideBlock {
        display: none;
    }
    #add-button {
        left: 20px;
    }
    #delete-button {
        right: 20px;
    }
}

@media (max-width: 500px) {
    .buttons-main > button {
        width: 150px;
        font-size: 18px;
    }
}
</style>
