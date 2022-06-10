import { styled } from "@mui/system";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2) };
`

export const ItemLista = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(5) };
    margin-bottom: ${({ theme }) => theme.spacing(5) };;

    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(2)};
        margin-bottom: ${({ theme }) => theme.spacing(10) };;
    }
`

export const Foto = styled('img')`
    width: 100%;
    height: 245px;
    border-radius: 5px;

    ${({ theme }) => theme.breakpoints.down('md')} {
        height: auto;
    }
`

export const Infotmacoes = styled('div')`
   display: flex;
   flex-direction: column;
   gap: ${({ theme }) => theme.spacing(2)};
`

export const Nome = styled('h2')`
    margin: 0;
`;

export const Descricao = styled('p')`
    margin: 0;
    word-break: break-word;
`;