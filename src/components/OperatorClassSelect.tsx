import './OperatorClassSelect.css'

export function OperatorClassSelect() {
    return(
        <>
        <div id="OpClassSelect" className="OpClassSelectContainer">
            <div className="opClass Vanguard"></div>
            <div className="opClass Guard"></div>
            <div className="opClass Defender"></div>
            <div className="opClass Caster"></div>
            <div className="opClass Sniper"></div>
            <div className="opClass Medic"></div>
            <div className="opClass Supporter"></div>
            <div className="opClass Specialist"></div>
            <div className="opClassAll oCOn">All On</div>
            <div className="opClassAll oCOff">All Off</div>
        </div>            
        </>    
    )
}