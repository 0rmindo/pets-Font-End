import { Axios, AxiosError } from "axios";
import { error } from "console";
import { useState, useEffect } from "react";
import { Pet } from '../../@types/Pet';
import { ApiService } from "../../services/ApiServices";

export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]),
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((resposta) => {
                setListaPets(resposta.data);
            })
    }, [])

    useEffect(() => {
        if(petSelecionado === null){
            limparFormulario();
        }
    }, [petSelecionado])

    function adotar () {
        if(petSelecionado !== null){
            if(validadarDadosAdocao()){
                ApiService.post('/adocoes',{
                    pet_id: petSelecionado.id,
                    email, // email: email
                    valor  //valor: valor 
                })  
                    .then(() => {
                        setPetSelecionado(null);
                        setMensagem('Pet adotado com sucesso!');
                        limparFormulario();
                    })
                    .catch((error: AxiosError) => {
                        setMensagem(error.response?.data.messagem)
                    })
            } else {
                setMensagem('Preencha todos os campos corretamente!');
            }
        }
    }

    function validadarDadosAdocao() {
        return email.length > 0 && valor.length > 0;
    }

    function limparFormulario() {
        setEmail(''),
        setValor('')
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}