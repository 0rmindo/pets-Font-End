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
    onSelect: (pet: Pet) => void;
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
                        <Button
                            variant={'contained'} 
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.nome}
                        </Button>
                    </Infotmacoes>
                </ItemLista>
            ))}
        </ListaStyled>
    )
}

