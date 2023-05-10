import { DivButtonSubmit } from './styles';

function ButtonSubmit({ text, widthAll, disabledTerm }){
    return(
        <DivButtonSubmit variant={widthAll}>
            <button type="submit" disabled={disabledTerm}>{text}</button>
        </DivButtonSubmit>
    )
}

export default ButtonSubmit