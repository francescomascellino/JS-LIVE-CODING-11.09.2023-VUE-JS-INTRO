const { createApp } = Vue

createApp({

    //CONTIENE I DATI
    data() {

        return {
            message: 'Hello Vue!',
            inputTextValue: "",
            myClasseRed: "text-red",
            titleColor: "text-red"
        }

    },

    //CONTIENE LE FUNZIONI
    methods: {

        alertWelcome() {
            alert("Welcome!");
        },

        changeColor() {
            console.log(this);

            if (this.titleColor === "text-red") {

                this.titleColor = "text-blue";
                console.log(this.titleColor);

            } else {

                this.titleColor = "text-red";
                console.log(this.titleColor);

            }
        }

    }

}).mount('#app')