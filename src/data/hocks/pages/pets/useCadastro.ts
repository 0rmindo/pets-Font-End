import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from '../../../services/ApiServices';


export function useCadastro(){
    const [nome, setNome] = useState(''),
    [historia, setHistoria] = useState(''),
    [foto, setFoto] = useState(''),
    [mensagem, setMensagem] = useState('');
    
    function cadastrar(){
        if(validarFormulario()){
            ApiService.post('/pets', {
                nome,
                historia,
                foto
            })
                .then(() => {
                    limpar();
                    setMensagem('Pet cadatrado com sucesso!')
                })
                .catch((error: AxiosError) => {
                    setMensagem(error.response?.data.message);
                })
        } else {
            setMensagem('Preencha todos os campos!');
        }
    }

    function validarFormulario(){
        return nome.length > 2 && historia.length > 5 && foto.length > 5;
    }

    function limpar(){
        setNome('');
        setHistoria('');
        setFoto('');
    }

    return {
        nome,
        historia,
        foto,
        mensagem,
        setNome,
        setHistoria,
        setFoto,
        setMensagem,
        cadastrar
    }
}