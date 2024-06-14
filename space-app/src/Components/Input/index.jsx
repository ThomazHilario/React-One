// icons
import { Search } from 'lucide-react'

export const Input = () => {
    return(
        <div className='container__input'>
            <div className='radius'>
                <input type="text"  placeholder='O que voce procura'/> 
                <Search color='violet' size={18} cursor='pointer'/>
            </div>
        </div>
    )
}