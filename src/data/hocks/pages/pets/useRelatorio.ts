import { useEffect, useState } from 'react';
import { Relatorio } from '../../../@types/Relatorio';
import { ApiService } from '../../../services/ApiServices';

export function useRelatorio(){
    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes').then((resposta) => {
            setListaRelatorio(resposta.data);
        })
    }, [])

    return {
        listaRelatorio
    }    
}