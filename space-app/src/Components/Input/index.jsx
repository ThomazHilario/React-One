// icons
import { Search } from 'lucide-react'

export const Input = ({search, setSearch}) => {
    return(
        <div className='container__input'>
            <div className='radius'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='O que voce procura'/> 
                <Search color='violet' size={18} cursor='pointer'/>
            </div>
        </div>
    )
}