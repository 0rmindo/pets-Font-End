import { Button } from '@mui/material'
import {
    ListaStyled,
    ItemLista,
    Foto,
    Infotmacoes,
    Nome,
    Descricao
} from './Lista.style'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListaProps{
    pets: Pet[];
}

export default function Lista(props: ListaProps){
    const TamanhoMaximoTexto = 200;

    return (
        <ListaStyled>
            {props.pets.map(pet => (
                <ItemLista key={pet.id}>
                    <Foto src={pet.foto} alt={pet.nome} />
                    <Infotmacoes>
                        <Nome>{pet.nome}</Nome>
                        <Descricao>
                            {TextService.LimitarTexto(pet.historia, TamanhoMaximoTexto)}
                        </Descricao>
                        <Button fullWidth
                        variant={'contained'}
                        >Adotar {pet.nome}</Button>
                    </Infotmacoes>
                </ItemLista>
            ))}
        </ListaStyled>
    )
}

