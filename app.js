const app = Vue.createApp({
    data() {
        return {
            firstName: 'Hunny',
            lastName: 'Mun',
            email: 'hunnymun@schweet.com',
            gender: 'male',
            picture: 'https://cfcdn.zulily.com/images/cache/product/1000x1201/64027/zu6406987_main_tm1385867129.jpg'
        }
    },

    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
             
        }
    }
    
})


app.mount('#app')

