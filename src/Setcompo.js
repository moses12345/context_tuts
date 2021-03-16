import  { Using_consumer } from './context/context_thing'

const Setcompo = () => {
    return (
        <Using_consumer >
            {
                (context) =>{
                    return <>{context.posting}</>;
                }
            }
        </Using_consumer>
        
    )
}

export default Setcompo
