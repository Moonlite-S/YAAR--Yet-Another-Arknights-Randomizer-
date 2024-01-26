import './CharacterIDCard.css'

export function CharacterIDCard(charID : {name: String}) {
    return (
        <>
            <div className='opCard'>
                <p>{charID.name}</p>
            </div>
        </>
    )
}