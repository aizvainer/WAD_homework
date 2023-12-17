import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        "author": "Noor Duncan",
        "text": "Tartu 2024",
        "image": "tartu-old-city.jpg",
        "timestamp": 1666475066
    },
    {
        "author": "Davina Charles",
        "text": "Anyone knows in which room lab is today",
        "timestamp": 1664747066
    },
    {
        "author": "Kaylum Cruz",
        "text": "Does anybody want to study together at Delta?",
        "timestamp": 1664747123
    },
    {
        "author": "Traci May",
        "text": "Hey everyone, I just found out about our new homework assignment! It seems like the academic surprises just keep coming.",
        "timestamp": 1664743481
    },
    {
        "author": "Issac Neal",
        "text": "There are many cool events upcoming! Don't miss them!",
        "timestamp": 1663623866
    },
    {
        "author": "Curtis Graves",
        "text": "New school day, new opportunities! Let's go forward to knowledge!",
        "timestamp": 1662241466
    },
    {
        "author": "Melanie Garza",
        "text": "Sara Tyson. WORKING IN TANDEM",
        "image": "tandem.jpg",
        "timestamp": 1660772666
    },
    {
        "author": "Casey Barronn",
        "text": "Remember, student, the main thing that distinguishes a university from a school: your diploma is your problems.",
        "timestamp": 1660427066
    },
    {
        "author": "Leland Warren",
        "text": "There will be a fire drill tomorrow afternoon",
        "timestamp": 1660384800
    },
    {
        "author": "Ellie Blackwell",
        "text": "Your studies will take place in this building",
        "image": "delta.jpg",
        "timestamp": 1659999203
    }
    ],
    isAuthenticated: false,
  },
  getters: {
    getPosts (state) {
      return state.posts.map(post => {
        return {
          author: post.author,
          text: post.text,
          image: post.image,
          timestamp: new Date(post.timestamp * 1000).toLocaleDateString()
        }
      })
    }
  },
  mutations: {
        // Mutation to update likes for a specific post
        updatePostLikes(state, { author, likes }) {
          state.postLikes[author] = likes;
        },
        // Mutation to reset likes for all posts
        resetAllLikes(state) {
          state.postLikes = {};
        },
        login(state) {
          state.isAuthenticated = true;
        },
        logout(state) {
          state.isAuthenticated = false;
        },
  },
  actions: {
    // Action to handle like toggle for a post
    toggleLike({ commit, state }, author) {
      const currentLikes = state.postLikes[author] || 0;
      const newLikes = currentLikes + (state.postLikes[author] ? -1 : 1);
      commit('updatePostLikes', { author, likes: newLikes });
    },
    loginUser({ commit }) {
      commit('login');
    },
    logoutUser({commit}) {
      commit('logout')
    }
    
  },
  modules: {
  }
})
