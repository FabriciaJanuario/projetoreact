function ExibirMensagem() {
    function mensagem() {
        console.log("Mensagem legal")
    }
    
    return(
        <>
            <button onClick={mensagem}>Exibir mensagem</button>
        </>
    )
}

export default ExibirMensagem;