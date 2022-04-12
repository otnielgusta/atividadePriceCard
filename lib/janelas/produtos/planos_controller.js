

module.exports = {
    async getPlanos(setPlanos, setIsLoading) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        let config = {
            method: 'GET',
            headers: headers
        }

        setTimeout(() => {
            fetch('http://localhost/api_planos/planos.php', config)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setPlanos(data);
                    setIsLoading(false)

                });
        }, 2000)

    },

    async setPlanosController(dados, setPlanos, setIsLoading){
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        let config = {
            method: 'POST',
            body: dados,
            headers:headers,
            mode: 'no-cors'
        }

        console.log(config);
        
        fetch('http://localhost/api_planos/set_planos.php', config)
        .then((response) => response.json)
        .then((data)=>{
            if (data['status']) {
                if(data['status'] == 'ok'){
                    alert("Plano inserido")
                    this.getPlanos(setPlanos, setIsLoading)
                }else{
                    alert("Plano não inserido");
                }
            }else{
                alert("Ocorreu um erro");
            }
        })
        

    }
}