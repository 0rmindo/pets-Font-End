import { Button } from '@mui/material'
import {
    ListaStyled,
    ItemLista,
    Foto,
    Infotmacoes,
    Nome,
    Descricao
} from './Lista.style'

export default function Lista(){
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src={'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg'} />
                <Infotmacoes>
                    <Nome>Bidu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nam repudiandae dicta mollitia unde, tenetur saepe nesciunt explicabo soluta animi quisquam delectus, quasi dolorem magnam eum quidem! Iusto, quo quaerat.
                    </Descricao>
                    <Button fullWidth
                    variant={'contained'}
                    >Adotar</Button>
                </Infotmacoes>
            </ItemLista>
            <ItemLista>
                <Foto src={'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg'} />
                <Infotmacoes>
                    <Nome>Bidu</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam nam repudiandae dicta mollitia unde, tenetur saepe nesciunt explicabo soluta animi quisquam delectus, quasi dolorem magnam eum quidem! Iusto, quo quaerat.
                    </Descricao>
                    <Button fullWidth
                    variant={'contained'}
                    >Adotar</Button>
                </Infotmacoes>
            </ItemLista>
        </ListaStyled>
    )
}