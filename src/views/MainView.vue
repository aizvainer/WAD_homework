<template>
    <HeaderComponent />
    <div class="mainBlock">
        <div class="sideBlock"></div>
        <div id="dynamicPostsContainer">
            <article v-for="post in getPosts()">
                <div class="articleInfo">
                    <div class="user">
                        <a href="#" class="userLink postLink"></a>
                        <div>{{ post.author }}</div>
                    </div>
                    <div>{{ post.timestamp }}</div>
                </div>
                <div class="articleBody">
                    <img
                        v-if="post.image !== undefined"
                        :src="require('@/assets/' + post.image)"
                    />
                    {{ post.text }}
                </div>
                <div>
                    <div class="likeBtn"></div>
                </div>
            </article>
        </div>
        <div class="sideBlock"></div>
    </div>
    <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "MainView",
    components: {
        HeaderComponent,
        FooterComponent,
    },
    methods: {
        getPosts() {
            return this.$store.getters.getPosts;
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
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

@media (max-width: 800px) {
    .sideBlock {
        display: none;
    }
}
</style>
